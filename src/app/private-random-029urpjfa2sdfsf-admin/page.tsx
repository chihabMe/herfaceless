import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Search } from "@/components/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TopNav } from '@/components/top-nav'
import { RecentSales } from "./_components/recent-sales";
import { Overview } from "./_components/overview";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
	return (
		<section className="w-full ">
			{/* ===== Top Heading ===== */}
			{/* <TopNav links={topNav} /> */}
			<div className="ml-auto flex items-center space-x-4">
				<Search />
			</div>

			<div className="mb-2 flex items-center justify-between space-y-2">
				<h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
				<div className="flex items-center space-x-2">
					<Button>Download</Button>
				</div>
			</div>
			<Tabs
				orientation="vertical"
				defaultValue="overview"
				className="space-y-4"
			>
				<div className="w-full overflow-x-auto pb-2">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
						<TabsTrigger value="reports">Reports</TabsTrigger>
						<TabsTrigger value="notifications">
							Notifications
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="overview" className="space-y-4">
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Revenue
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									$45,231.89
								</div>
								<p className="text-xs text-muted-foreground">
									From last month: +20.1%
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Subscriptions
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">+2350</div>
								<p className="text-xs text-muted-foreground">
									From last month: +180.1%
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Sales
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<rect
										width="20"
										height="14"
										x="2"
										y="5"
										rx="2"
									/>
									<path d="M2 10h20" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									+12,234
								</div>
								<p className="text-xs text-muted-foreground">
									From last month: +19%
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Active Now
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">+573</div>
								<p className="text-xs text-muted-foreground">
									Since last hour: +201
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
						<Card className="col-span-1 lg:col-span-4">
							<CardHeader>
								<CardTitle>Overview</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<Overview />
							</CardContent>
						</Card>
						<Card className="col-span-1 lg:col-span-3">
							<CardHeader>
								<CardTitle>Recent Sales</CardTitle>
								<CardDescription>
									Recent sales description: 265
								</CardDescription>
							</CardHeader>
							<CardContent>
								<RecentSales />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
}
