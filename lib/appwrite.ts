import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsn.aora',
  projectId: '66522fb4003702348a77',
  databaseId: '6652319f0034f77a4a8f',
  usersCollectionId: '665231d9003017437147',
  videosCollectionId: '665232110036ce17f8cf',
  storageId: '6652342d0014394338c6',
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

type User = {
  email: string;
  password: string;
  username?: string;
};

export const createUser = async ({ email, password, username }: User) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error('Failed to create account');
    }

    const avatarUrl = avatars.getInitials(username);

    await singIn({ email, password });

    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const singIn = async ({ email, password }: User) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) {
      throw new Error('Failed to login');
    }
    return session;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getCurrentUser = async () => {
  try {
    const session = await account.get();
    console.log(session);

    if (!session) {
      throw new Error('Failed to get current user');
    }

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal('accountId', session.$id)]
    );

    console.log(currentUser);

    if (!currentUser) {
      throw new Error('Failed to get current user');
    }

    return currentUser.documents[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};
