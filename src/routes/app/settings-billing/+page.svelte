<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Bills';
</script>

<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
	<div class="text-xl font-semibold">Billing History</div>
	<div class="divider mt-2"></div>
	<div class="h-full w-full pb-6 bg-base-100">
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<thead>
					<tr>
						<th>Invoice No</th>
						<th>Invoice Generated On</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Status</th>
						<th>Invoice Paid On</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>#4567</td>
						<td>05 Mar 2024</td>
						<td>Product usages</td>
						<td>$23,989</td>
						<td><div class="badge badge-primary">Pending</div></td>
						<td>-</td>
					</tr>
					<tr>
						<td>#4523</td>
						<td>04 Feb 2024</td>
						<td>Product usages</td>
						<td>$34,989</td>
						<td><div class="badge badge-primary">Pending</div></td>
						<td>-</td>
					</tr>
					<tr>
						<td>#4453</td>
						<td>05 Jan 2024</td>
						<td>Product usages</td>
						<td>$39,989</td>
						<td> <div class="badge badge-success">Paid</div></td>
						<td>16 Feb 2024</td>
					</tr>
					<tr>
						<td>#4359</td>
						<td>06 Dec 2023</td>
						<td>Product usages</td>
						<td>$28,927</td>
						<td>
							<div class="badge badge-success">Paid</div>
						</td>
						<td>23 Jan 2024</td>
					</tr>
					<tr>
						<td>#3359</td>
						<td>06 Nov 2023</td>
						<td>Product usages</td>
						<td>$28,927</td>
						<td>
							<div class="badge badge-success">Paid</div>
						</td>
						<td>30 Dec 2023</td>
					</tr>
					<tr>
						<td>#3367</td>
						<td>07 Oct 2023</td>
						<td>Product usages</td>
						<td>$28,927</td>
						<td> <div class="badge badge-success">Paid</div> </td>
						<td>06 Dec 2023</td>
					</tr>
					<tr>
						<td>#3359</td>
						<td>07 Sep 2023</td>
						<td>Product usages</td>
						<td>$28,927</td>
						<td><div class="badge badge-success">Paid</div></td>
						<td>12 Nov 2023</td>
					</tr>
					<tr>
						<td>#2359</td>
						<td>08 Aug 2023</td>
						<td>Product usages</td>
						<td>$28,927</td>
						<td><div class="badge badge-success">Paid</div></td>
						<td>19 Oct 2023</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
<div class="h-16"></div>
