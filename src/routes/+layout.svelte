<script lang="ts">
	//* Style
	import '../app.css';

	//* Icons
	import Bars4Icon from '$icons/hero-icons/Bars4Icon.svelte';
	import SunIcon from '$icons/hero-icons/SunIcon.svelte';
	import MoonIcon from '$icons/hero-icons/MoonIcon.svelte';
	import BellIcon from '$icons/hero-icons/BellIcon.svelte';
	import BoltIcon from '$icons/hero-icons/BoltIcon.svelte';
	import InboxArrowDownIcon from '$icons/hero-icons/InboxArrowDownIcon.svelte';
	import ChartBarIcon from '$icons/hero-icons/ChartBarIcon.svelte';
	import CalendarDaysIcon from '$icons/hero-icons/CalendarDaysIcon.svelte';
	import DocumentDuplicateIcon from '$icons/hero-icons/DocumentDuplicateIcon.svelte';
	import ChevronDown from '$icons/hero-icons/ChevronDown.svelte';
	import ArrowRightStartOnRectangleIcon from '$icons/hero-icons/ArrowRightStartOnRectangleIcon.svelte';
	import UserIcon from '$icons/hero-icons/UserIcon.svelte';
	import KeyIcon from '$icons/hero-icons/KeyIcon.svelte';
	import DocumentIcon from '$icons/hero-icons/DocumentIcon.svelte';
	import ExclamationTriangleIcon from '$icons/hero-icons/ExclamationTriangleIcon.svelte';
	import Cog6ToothIcon from '$icons/hero-icons/Cog6ToothIcon.svelte';
	import WalletIcon from '$icons/hero-icons/WalletIcon.svelte';
	import UsersIcon from '$icons/hero-icons/UsersIcon.svelte';
	import DocumentTextIcon from '$icons/hero-icons/DocumentTextIcon.svelte';
	import CodeBracketSquareIcon from '$icons/hero-icons/CodeBracketSquareIcon.svelte';
	import TableCellsIcon from '$icons/hero-icons/TableCellsIcon.svelte';
	import Squares2x2Icon from '$icons/hero-icons/Squares2x2Icon.svelte';
	import XMarkIcon from '$icons/hero-icons/XMarkIcon.svelte';

	//*	  States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	import { page } from '$app/stores';

	function closeSideBar() {
		const element = document.getElementById('left-sidebar-drawer') as HTMLButtonElement;
		element.click();
	}

	let currentRouterName = $state('');

	$effect(() => {
		currentRouterName = $page.url.pathname.slice(1);
	});
</script>

{#if currentRouterName === 'login' || currentRouterName === 'register' || currentRouterName === 'forgot-password'}
	<slot />
{:else}
	<div class="drawer lg:drawer-open">
		<input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<div class="navbar sticky top-0 bg-base-100 z-10 shadow-md">
				<div class="flex-1">
					<label for="left-sidebar-drawer" class="btn btn-primary drawer-button lg:hidden">
						<Bars4Icon class="h-5 inline-block w-5" />
					</label>
					<h1 class="text-2xl font-semibold ml-2">{pageTitleState.pageTitle}</h1>
				</div>
				<div class="flex-none">
					<label class="swap">
						<input type="checkbox" />
						<SunIcon class="h-6 w-6 fill-current" />
						<MoonIcon class="h-6 w-6 fill-current" />
					</label>
					<button class="btn btn-ghost ml-4 btn-circle">
						<div class="indicator">
							<BellIcon class="h-6 w-6 fill-current" />
							<span class="indicator-item badge badge-secondary badge-sm">15</span>
						</div>
					</button>
					<div class="dropdown dropdown-end ml-4">
						<span class="btn btn-ghost btn-circle avatar">
							<div class="w-10 rounded-full">
								<img src="/avatar.jpg" alt="profile" />
							</div>
						</span>
						<ul
							class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li class="justify-between">
								<a href="/app/settings-profile">Profile Settings<span class="badge">New</span></a>
							</li>
							<li><a href="/app/settings-billing">Bill History</a></li>
							<div class="divider mt-0 mb-0"></div>
							<li><a href="/">Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
			<main class="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200">
				<slot />
			</main>
		</div>
		<div class="drawer-side z-30">
			<label for="left-sidebar-drawer" class="drawer-overlay"></label>
			<ul class="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
				<button
					onclick={() => closeSideBar()}
					class="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
				>
					<XMarkIcon class="h-5 inline-block w-5" />
				</button>
				<li class="mb-2 font-semibold text-xl">
					<a href="/app/welcome"
						><img
							class="mask mask-squircle w-10"
							src="/logo192.png"
							alt="DashWind Logo"
						/>DashWind</a
					>
				</li>
				<li>
					<a class="font-normal" href="/app/dashboard">
						<Squares2x2Icon class="h-5 w-5" />
						Dashboard
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/leads">
						<InboxArrowDownIcon class="w-6 h-6" />
						Leads
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/transactions"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							class="h-6 w-6"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path></svg
						> Transactions</a
					>
				</li>
				<li>
					<a class="font-normal" href="/app/charts">
						<ChartBarIcon class="w-5 h-5"></ChartBarIcon>Analytics
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/integration">
						<BoltIcon class="h-5 w-5 inline-block" /> Integration
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/calendar">
						<CalendarDaysIcon class="w-5 h-5" /> Calendar
					</a>
				</li>
				<li>
					<div class="flex flex-col">
						<div class="w-full block">
							<DocumentDuplicateIcon class="h-6 w-6 inline" />
							Pages
							<ChevronDown
								class="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all rotate-180"
							/>
						</div>
						<div class=" w-full">
							<ul class="menu menu-compact">
								<li>
									<a href="/login"> <ArrowRightStartOnRectangleIcon class="h-5 w-5" />Login</a>
								</li>
								<li>
									<a href="/register"> <UserIcon class="h-5 w-5" /> Register</a>
								</li>
								<li>
									<a href="/forgot-password">
										<KeyIcon class="h-5 w-5"></KeyIcon>
										Forgot Password
									</a>
								</li>
								<li>
									<a href="/app/blank"><DocumentIcon class="h-5 w-5" />Blank Page</a>
								</li>
								<li>
									<a href="/app/404"><ExclamationTriangleIcon class="h-5 w-5" />404</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="flex flex-col">
						<div class="w-full block">
							<Cog6ToothIcon class="h-6 w-6 inline" />
							Settings
							<ChevronDown
								class="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all rotate-180"
							/>
						</div>
						<div class=" w-full">
							<ul class="menu menu-compact">
								<li>
									<a href="/app/settings-profile"><UserIcon class="h-5 w-5" />Profile</a>
								</li>
								<li>
									<a href="/app/settings-billing"><WalletIcon class="h-5 w-5" />Billing</a>
								</li>
								<li>
									<a href="/app/settings-team"><UsersIcon class="h-5 w-5" />Team Members</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="flex flex-col">
						<div class="w-full block">
							<DocumentTextIcon class="w-6 h-6 inline" />
							Documentation
							<ChevronDown class="w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all" />
						</div>
						<div class=" w-full">
							<ul class="menu menu-compact">
								<li>
									<a href="/app/getting-started">
										<DocumentTextIcon class="w-5 h-5 inline" />Getting Started
									</a>
								</li>
								<li>
									<a href="/app/features"><TableCellsIcon class="h-5 w-5" />Features</a>
								</li>
								<li>
									<a href="/app/components"><CodeBracketSquareIcon class="h-5 w-5" />Components</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
{/if}
