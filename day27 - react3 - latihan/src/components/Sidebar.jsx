const Sidebar = ({ toggleSidebar }) => {
  return (
    <div
      style={{
        backgroundColor: "#CBD5E1",
      }}
    >
      <button onClick={toggleSidebar}>X</button>
      <p>Home</p>
      <p>Contact</p>
      <p>Profile</p>
    </div>
  );
};

export default Sidebar;
