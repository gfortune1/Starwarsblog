import React,{useContext} from "react";
import {Card} from "../component/card"
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const {store,actions}=useContext(Context)
	return(<div className="text-center mt-5">
	<div>
		<h1>Characters</h1>
		<div>

		</div>
		</div>	
	</div>)
};
