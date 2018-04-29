import {Image} from "cloudinary-react";

const About = () => (
	<section id="about" className="about-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h1>אודות</h1>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-md-push-8">
					<div className="section-picture">
						{/* <img className="img-responsive" src="/img/about/about.jpg" alt="image" /> */}
						<Image
							cloudName="dadaboom"
							publicId="Cover/about.jpg"
							className={"img-responsive"}
						/>
					</div>
				</div>
				<div className="col-md-8 col-md-pull-4">
					<div className="section-content">
						<div className="tab-content">
							<h3
								className="wow fadeInUp text-right"
								data-wow-delay="0.2s"
							>
								צפריר ליכטנשטיין
							</h3>
							<p className={"text-right"}>
								מתופף מקצועי, בעל למעלה מ-20 שנות נסיון בלימוד
								תופים וכלי הקשה לכל הגילאים והרמות, בארץ ובחו"ל.
							</p>
							<p className={"text-right"}>
								ניגן עם מיטב האמנים ולימד במיטב בתי הספר לתופים.
							</p>
							<p className={"text-right"}>
								בשנים האחרונות, בנוסף לנגינה ולהוראה בסטודיו,
								מתמחה גם בעבודה עם ילדים על ספקטרום ה-POD ובלי
								ליקויי קשב וריכוז ויזם שלל שיטות לימוד טיפוליות
								חדשות ויחודיות בתחום.
							</p>
							<p className={"text-right"}>
								בארץ ניגן עם מיטב המוסיקאים, ביניהם: גלי עטרי,
								מיקה קרני, שב"ק ס', מופע הארנבות של ד"ר קספר,
								דיקלה, קורין אלאל וערן צור ועוד.
							</p>
							<p className={"text-right"}>
								בארצות הברית הופיע והקליט עם אמנים רבים, ביניהם:
								Lizzie West, Burning Spear וחלק במות עם Chris
								Issac Aaron Neville ועוד.
							</p>
							<p className={"text-right"}>
								בין השנים 1994-1998 למד בביה"ס למוסיקה "רימון",
								ההוסמך למטפל ABA בשנת 2011, לימד ב"מכללת הד"
								וכיום מלמד ומרכז את מגמת המוסיקה בביה"ס הדמוקרטי
								"מקום לגדול" בכפר הירוק, קונסרבטוריון אביב,
								"מרכז ישי"-ביה"ס למחוננים בפר סבא ועוד. בין
								המורים לתופים איתם למד ראוי לציין את דיויד ריץ',
								איתן איצקוביץ', רוני הולן וגיל לדין.
							</p>
							<div className="signature text-right">
								<span>S</span>ignature
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

import React from 'react';

export default About;
