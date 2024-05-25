import { Account, Client, ID } from 'react-native-appwrite';

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

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
