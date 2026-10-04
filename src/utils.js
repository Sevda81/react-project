// // export const isLogin = () => {
// //   if (document.cookie == "username=admin") return true;
// //   return false;
// };

export const isLogin = () => {
  return document.cookie.includes("username=admin");
};