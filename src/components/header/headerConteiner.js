import {connect} from "react-redux";
import {Header} from "./header";

const mapStateToProps = state => ({
    logined:state.auth.logined,
    loginedUser:state.auth.loginedUser
})

const mapDispatchToProps = () =>({})

export default connect(mapStateToProps,mapDispatchToProps())(Header)