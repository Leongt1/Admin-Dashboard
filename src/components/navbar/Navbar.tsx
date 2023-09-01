import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="logo.svg" alt="" />
				<span>Iamadmin</span>
			</div>
			<div className="icons">
				<img src="/search.svg" alt="" className="icon" />
				<img src="/app.svg" alt="" className="icon" />
				<img src="expand.svg" alt="" className="icon" />
				<div className="notification">
					<img src="/notifications.svg" alt="" />
					<span>1</span>
				</div>
				<div className="user">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
						alt=""
					/>
					<span>Noel</span>
				</div>
				<img src="/setting.svg" alt="" className="icon" />
			</div>
		</div>
	);
};

export default Navbar;
