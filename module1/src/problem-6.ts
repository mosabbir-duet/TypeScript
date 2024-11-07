interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (userProfile: Profile, updateInfo: {}) => {
  //   type keyOfProfile = Object.keys

  console.log(Object.keys(userProfile));
  //   return { userProfile, updateInfo };
  const keyOfUpdateProfile = Object.keys(updateInfo);
  for (let key in userProfile) {
    if (keyOfUpdateProfile.includes(key)) {
      let updateUserProfile = { ...userProfile };
      userProfile.key = updateInfo.key;
      console.log({ ...updateUserProfile });
    }
  }
  console.log(updateInfo);
};

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

console.log(updateProfile(myProfile, { name: "sabbir" }));
