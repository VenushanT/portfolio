import { Mail, Linkedin, Github } from "lucide-react";


const Contact = () => (
	<section id="contact" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative">
		<div className="container mx-auto max-w-xl text-center">
			<h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
			<p className="text-gray-300 mb-8">Feel free to connect with me on social media!</p>
			<div className="flex justify-center gap-8 mb-4">
				<a
					href="mailto:venushanthiruchelvam@gmail.com"
					className="p-3 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors"
					aria-label="Email"
				>
					<Mail className="w-7 h-7 text-gray-300 hover:text-white" />
				</a>
				<a
					href="https://www.linkedin.com/in/venushan-thiruchelvam/"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors"
					aria-label="LinkedIn"
				>
					<Linkedin className="w-7 h-7 text-gray-300 hover:text-white" />
				</a>
				<a
					href="https://github.com/VenushanT"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors"
					aria-label="GitHub"
				>
					<Github className="w-7 h-7 text-gray-300 hover:text-white" />
				</a>
			</div>
		</div>
	</section>
);

export default Contact;
