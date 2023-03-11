import React from "react";
import { getImg } from "../../hook/Helper";
import styles from './Home.module.sass';
import { CardNum } from './CardNum'
import { CardObj } from './CardObj'

export const Home = () => {

	return (
		<div className={styles.div} style={{ backgroundImage: `url(${getImg('home/bg.png')})`, height: '100vh', display: 'flex', alignItems: "center" }} >
			<CardNum />
			<CardObj />
		</div>
	)
}