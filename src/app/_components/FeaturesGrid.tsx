import * as motion from "framer-motion/m";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	FileText,
	Mic,
	Database,
	Pen,
	MessageSquare,
	Briefcase,
	Lightbulb,
	Star,
} from "lucide-react";
import Link from "next/link";

const features = [
	{
		icon: FileText,
		title: "The Key to Going Viral on Instagram (+50 Insights)",
		value: 197,
		description:
			"Unlock 50 expert tips to create viral Instagram content, grow your audience, and boost engagement.",
		darkBg: true,
	},
	{
		icon: Mic,
		title: "Digital Marketing Strategy Handbook",
		value: 97,
		description:
			"Master digital marketing with actionable strategies to build your brand and convert followers into customers.",
		darkBg: false,
	},
	{
		icon: Database,
		title: "Mastering Instagram Marketing",
		value: 87,
		description:
			"Learn the secrets to optimizing your Instagram profile, content, and hashtags for maximum impact.",
		darkBg: true,
	},
	{
		icon: Pen,
		title: "Exclusive Members-Only Community",
		value: 297,
		description:
			"Connect with like-minded marketers, share insights, and gain exclusive access to expert tips.",
		darkBg: false,
	},
	{
		icon: MessageSquare,
		title: "Social Media Success Framework",
		value: 47,
		description:
			"A step-by-step guide to crafting winning social media strategies that drive results.",
		darkBg: true,
	},
	{
		icon: Briefcase,
		title: "Guide to Creating Faceless Reels",
		value: 97,
		description:
			"Learn how to create captivating faceless reels that engage and grow your audience.",
		darkBg: false,
	},
	{
		icon: Lightbulb,
		title: "The Definitive Faceless Content Guide",
		value: 85,
		description:
			"Master the art of faceless content creation with this ultimate guide to stand out online.",
		darkBg: true,
	},
	{
		icon: Star,
		title: "Canva Essentials for Beginners",
		value: 27,
		description:
			"Learn the basics of Canva to create stunning designs and elevate your brand effortlessly.",
		darkBg: false,
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};
export default function FeaturesGrid() {
	const totalValue = features.reduce(
		(acc, feature) => acc + feature.value,
		0,
	);

	return (
		<section className="min-h-screen bg-ground py-20 px-4">
			<div className="max-w-6xl mx-auto space-y-12">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-center"
				>
					THIS IS WHAT&apos;S INCLUDED
				</motion.h2>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, index) => (
						<motion.div key={index} variants={item}>
							<Card
								className={`h-full min-h-[300px] transition-transform hover:scale-105 ${
									feature.darkBg
										? "bg-black text-white"
										: "bg-white text-black"
								}`}
							>
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<feature.icon className="h-10 w-10" />
									<h3 className="font-semibold">
										{feature.title}
									</h3>
									<p className="text-lg font-bold">
										(Value: ${feature.value})
									</p>
									<p className="text-sm">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center space-y-6"
				>
					<div className="text-2xl md:text-3xl font-bold">
						TOTAL VALUE:{" "}
						<span className="text-green-500">
							${totalValue.toLocaleString()}+
						</span>
					</div>

					<Link href={"/#pricing"} className="block">
						<Button
							aria-label="get started button"
							className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-md"
						>
							GET STARTED TODAY!
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
