import { SET_LANG_TO_BY, SET_LANG_TO_ENG, SET_LANG_TO_RUS } from "./types";

export const mapStateToProps = (state) => {
  const { currentLanguage } = state;
  const {
    authNavPlaylist,
    authNavSettings,
    authNavRegistration,
    footerContent,
    developers,
    logout,
    game,
    anisimov,
    kovbenya,
    martinkevich,
    chazov,
    comment,
    send,
    donationInfo,
    donationText,
    hello,
    signIn,
    about,
    donation,
    aboutText1,
    aboutText2,
    aboutText3,
    aboutButton,
    registrationInfo,
    email,
    password,
    logIn,
    registration,
    changeBackgroundImg,
    changeBackgroundColor,
    changeFontColor,
    incrFontSize,
    decrFontSize,
    resetStyle,
  } = state[currentLanguage];

  return {
    authNavPlaylist,
    authNavSettings,
    authNavRegistration,
    footerContent,
    developers,
    logout,
    game,
    footerAnisimov: anisimov,
    footerKovbenya: kovbenya,
    footerMartinkevich: martinkevich,
    footerChazov: chazov,
    comment,
    send,
    donationInfo,
    donationText,
    hello,
    signIn,
    about,
    donation,
    aboutText1,
    aboutText2,
    aboutText3,
    aboutButton,
    registrationInfo,
    email,
    password,
    logIn,
    registration,
    changeBackgroundImg,
    changeBackgroundColor,
    changeFontColor,
    incrFontSize,
    decrFontSize,
    resetStyle,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setRu: () => dispatch({ type: SET_LANG_TO_RUS }),
  setEn: () => dispatch({ type: SET_LANG_TO_ENG }),
  setBel: () => dispatch({ type: SET_LANG_TO_BY }),
});
