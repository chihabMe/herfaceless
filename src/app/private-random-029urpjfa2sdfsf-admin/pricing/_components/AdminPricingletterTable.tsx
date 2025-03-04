"use client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	// TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
// import { useToast } from "@/hooks/use-toast";
import { MoreHorizontalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getPricing } from "@/data/pricing-data";
import { deletePricing } from "@/app/actions/pricing-actions";
import NewPricingModal from "./NewPricingModal";
import UpdatePricingModal from "./UpdatePricingModal";
import { ADMIN_PAGE } from "@/constants";

// import { deleteEmailAction } from "../actions";

type dataType = Awaited<ReturnType<typeof getPricing>>["data"];
interface Props {
	data: dataType;
	count: number;
	currentPage: number;
	searchTerm: string;
}

export default function AdminPricingTable({
	data,
	count,
	currentPage,
	searchTerm,
}: Props) {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState(searchTerm || "");
	const [debounceTimeout, setDebounceTimeout] =
		useState<NodeJS.Timeout | null>(null);

	// Handle search with debounce
	const handleSearch = (value: string) => {
		setSearchInput(value);

		// Clear previous timeout if user keeps typing
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		// Set a new timeout to wait for 500ms before executing search
		const timeout = setTimeout(() => {
			router.push(`${ADMIN_PAGE}/pricing?search=${value}&page=${currentPage}`);
		}, 500);

		setDebounceTimeout(timeout);
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<div className="flex items-center justify-between space-x-6">
					<CardTitle>Pricing Dashboard</CardTitle>
					<NewPricingModal />
				</div>
			</CardHeader>
			<CardContent className="min-h-[calc(100vh-328px)]">
				<div className="mb-6 flex flex-col gap-4 md:flex-row">
					<Input
						placeholder="Search pricing..."
						value={searchInput}
						onChange={(e) => handleSearch(e.target.value)}
						className="md:w-1/3"
					/>
				</div>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Title</TableHead>
							<TableHead>Price</TableHead>
							<TableHead>Registred at</TableHead>
							<TableHead>Updated at</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((item) => (
							<TableItem key={item.id} item={item} />
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="flex w-full justify-center">
				<span className="text-sm text-muted-foreground">
					{count} pricing
				</span>
			</CardFooter>
		</Card>
	);
}
export const TableItem = ({ item }: { item: dataType[0] }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<TableRow onClick={() => setIsOpen(true)} key={item.id}>
				<TableCell>{item.title}</TableCell>
				<TableCell>{item.price}$</TableCell>
				<TableCell>{item.createdAt?.toLocaleDateString()}</TableCell>
				<TableCell>{item.updatedAt?.toLocaleDateString()}</TableCell>
				<TableCell onClick={(e) => e.stopPropagation()}>
					<PricingActionsMenu id={item.id} />
				</TableCell>
			</TableRow>
			<UpdatePricingModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				pricing={item}
			/>
		</>
	);
};

interface PricingActionsMenuProps {
	id: string;
}

export const PricingActionsMenu = ({ id }: PricingActionsMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="size-8 p-0">
					<MoreHorizontalIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-32">
				<DropdownMenuItem>
					<Button
						className="w-full"
						variant="destructive"
						size="sm"
						onClick={async () => {
							const result = await deletePricing({
								id,
							});
							if (result?.data?.success) {
								toast("deleted");
							} else {
								toast("unable to delete");
							}
						}}
					>
						Delete
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
