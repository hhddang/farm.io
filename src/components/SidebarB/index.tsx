import "./style.scss";

export const SidebarB = () => {
  const signInByGoogle = () => {
    alert('google');
  };
  const signInByFacebook = () => {
    alert('facebook');
  };

  return <div className="sidebar-b">
    <button className="auth-btn google-btn" onClick={signInByGoogle}>G</button>
    <button className="auth-btn facebook-btn" onClick={signInByFacebook}>F</button>
  </div>;
};
