import { Link } from "react-router-dom";
import "../styles.css";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="hero">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">About Page</h1>
					<p id="about-description" className="text-lg text-gray-600 mb-8">
						This is the about page. SPA navigation brought you here.
					</p>
					<Link to="/" className="btn-full">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
