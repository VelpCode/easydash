import { profile } from "console";
import Image from "next/image";

const INFO = {

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	name: {

        person: "Aman V.",
        firstname: "Aman",
        email: "velpmail@gmail.com",
        profilepic: <Image src = "/Leah.png" alt="Leah" height={70} width={70} className="rounded shadow-sm"/>
    }
};

export default INFO;