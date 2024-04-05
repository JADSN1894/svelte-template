<script lang="ts">
	//* Icons
	import ArrowDownTrayIcon from '$icons/hero-icons/ArrowDownTrayIcon.svelte';
	import ArrowPathIcon from '$icons/hero-icons/ArrowPathIcon.svelte';
	import BoltIcon from '$icons/hero-icons/BoltIcon.svelte';
	import CircleStackIcon from '$icons/hero-icons/CircleStackIcon.svelte';
	import CreditCardIcon from '$icons/hero-icons/CreditCardIcon.svelte';
	import EllipsisVertical from '$icons/hero-icons/EllipsisVertical.svelte';
	import EnvelopeIcon from '$icons/hero-icons/EnvelopeIcon.svelte';
	import HeartIcon from '$icons/hero-icons/HeartIcon.svelte';
	import ShareIcon from '$icons/hero-icons/ShareIcon.svelte';
	import UserGroupIcon from '$icons/hero-icons/UserGroupIcon.svelte';
	import UsersIcon from '$icons/hero-icons/UsersIcon.svelte';

	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	//* Utils
	import { TAILWIND_CONFIG } from '$utils/tailwind.ts';

	const colorSlate300 = TAILWIND_CONFIG.theme.colors.slate[300];

	pageTitleState.pageTitle = 'Dashboard';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
	<div class="">
		<div class="w-72"><span class="text-warning text-2xl">Calendar Component</span></div>
	</div>
	<div class="text-right">
		<button class="btn btn-ghost btn-sm normal-case">
			<ArrowPathIcon class="w-4 mr-2" />
			Refresh Data
		</button>
		<button class="btn btn-ghost btn-sm normal-case ml-2">
			<ShareIcon class="w-4 mr-2" />
			Share
		</button>
		<div class="dropdown dropdown-bottom dropdown-end ml-2">
			<span class="btn btn-ghost btn-sm normal-case btn-square">
				<EllipsisVertical class="w-5" />
			</span>
			<ul class="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<span>
						<EnvelopeIcon class="w-4" />
						Email Digests
					</span>
				</li>
				<li>
					<span>
						<ArrowDownTrayIcon class="w-4" />
						Download
					</span>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
	<div class="stats shadow">
		<div class="stat">
			<div class="stat-figure dark:text-slate-300 text-primary">
				<UserGroupIcon class="w-8 h-8" stroke={colorSlate300} aria-hidden={true} />
			</div>
			<div class="stat-title dark:text-slate-300">New Users</div>
			<div class="stat-value dark:text-slate-300">34.7k</div>
			<div class="stat-desc font-bold text-green-700 dark:text-green-300">↗︎ 2300 (22%)</div>
		</div>
	</div>
	<div class="stats shadow">
		<div class="stat">
			<div class="stat-figure dark:text-slate-300 text-primary">
				<CreditCardIcon class="w-8 h-8" stroke={colorSlate300} />
			</div>
			<div class="stat-title dark:text-slate-300" color={colorSlate300}>Total Sales</div>
			<div class="stat-value dark:text-slate-300">$34,545</div>
			<div class="stat-desc">Current month</div>
		</div>
	</div>
	<div class="stats shadow">
		<div class="stat">
			<div class="stat-figure dark:text-slate-300 text-primary">
				<CircleStackIcon class="w-8 h-8" stroke={colorSlate300} />
			</div>
			<div class="stat-title dark:text-slate-300">Pending Leads</div>
			<div class="stat-value dark:text-slate-300">450</div>
			<div class="stat-desc">50 in hot leads</div>
		</div>
	</div>
	<div class="stats shadow">
		<div class="stat">
			<div class="stat-figure dark:text-slate-300 text-primary">
				<UsersIcon class="w-8 h-8" stroke={colorSlate300} />
			</div>
			<div class="stat-title dark:text-slate-300">Active Users</div>
			<div class="stat-value dark:text-slate-300">5.6k</div>
			<div class="stat-desc font-bold text-rose-500 dark:text-red-400">↙ 300 (18%)</div>
		</div>
	</div>
</div>
<div class="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
		<div class="text-xl font-semibold">Montly Active Users (in K)</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<span class="text-warning text-2xl">GRAPHIC</span>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
		<div class="text-xl font-semibold">Revenue</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<span class="text-warning text-2xl">GRAPHIC</span>
		</div>
	</div>
</div>
<div class="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
	<div class="stats bg-base-100 shadow">
		<div class="stat">
			<div class="stat-title">Amount to be Collected</div>
			<div class="stat-value">$25,600</div>
			<div class="stat-actions"><button class="btn btn-xs">View Users</button></div>
		</div>
		<div class="stat">
			<div class="stat-title">Cash in hand</div>
			<div class="stat-value">$5,600</div>
			<div class="stat-actions"><button class="btn btn-xs">View Members</button></div>
		</div>
	</div>
	<div class="stats bg-base-100 shadow">
		<div class="stat">
			<div class="stat-figure invisible md:visible">
				<HeartIcon class="w-8 h-8" />
			</div>
			<div class="stat-title">Total Likes</div>
			<div class="stat-value">25.6K</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
		<div class="stat">
			<div class="stat-figure invisible md:visible">
				<BoltIcon class="w-8 h-8" />
			</div>
			<div class="stat-title">Page Views</div>
			<div class="stat-value">2.6M</div>
			<div class="stat-desc">14% more than last month</div>
		</div>
	</div>
</div>
<div class="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
		<div class="text-xl font-semibold">User Signup Source</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th></th>
							<th class="normal-case">Source</th>
							<th class="normal-case">No of Users</th>
							<th class="normal-case">Conversion</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Facebook Ads</td>
							<td>26,345</td>
							<td>10.2%</td>
						</tr>
						<tr>
							<th>2</th>
							<td>Google Ads</td>
							<td>21,341</td>
							<td>11.7%</td>
						</tr>
						<tr>
							<th>3</th>
							<td>Instagram Ads</td>
							<td>34,379</td>
							<td>12.4%</td>
						</tr>
						<tr>
							<th>4</th>
							<td>Affiliates</td>
							<td>12,359</td>
							<td>20.9%</td>
						</tr>
						<tr>
							<th>5</th>
							<td>Organic</td>
							<td>10,345</td>
							<td>10.3%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
		<div class="text-xl font-semibold">Orders by Category</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<span class="text-warning text-2xl">GRAPHIC</span>
		</div>
	</div>
</div>
<div class="h-16"></div>
