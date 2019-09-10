import { Share } from "react-native";

shareProfile = async (login, url) => {
  try {
    await Share.share({
      message: `Click the Url to visit @${login}, ${url}`,
      title: "GitHub Profile"
    });
  } catch (error) {
    alert(error.message);
  }
};

export default shareProfile;
