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
	import CurrencyDollarIcon from '$icons/hero-icons/CurrencyDollarIcon.svelte';
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
	import ChevronUp from '$icons/hero-icons/ChevronUp.svelte';

	//*	  States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	//* Tailwind
	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';

	//* Svelte
	import { page } from '$app/stores';

	function closeSideBar() {
		const element = document.getElementById('left-sidebar-drawer') as HTMLButtonElement;
		element.click();
	}

	let currentRouterName = $state('');

	//* Menu states
	let isPageMenuExpanded = $state(false);
	let isSettingsMenuExpanded = $state(false);
	let isDocumentationMenuExpanded = $state(false);

	const theme = TAILWIND_CONFIG.daisyui.themes;
	const lightThemeName = Object.keys(theme[0]).at(0)?.toString();
	// const darkThemeName = Object.keys(theme[1]).at(0)?.toString();

	$inspect(currentRouterName);

	$effect(() => {
		currentRouterName = $page.url.pathname.slice(1).trim();
	});
</script>

{#if currentRouterName === 'login' || currentRouterName === 'register' || currentRouterName === 'forgot-password' || currentRouterName === ''}
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
					<label class="swap swap-rotate">
						<input
							type="checkbox"
							class="theme-controller bg-transparent border-transparent invisible"
							value={lightThemeName}
						/>
						<SunIcon class="swap-off h-6 w-6 fill-current" />
						<MoonIcon class="swap-on h-6 w-6 fill-current" />
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
					<a href="/app/welcome">
						<img class="mask mask-squircle w-10" src="/logo192.png" alt="DashWind Logo" />
						DashWind
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/dashboard">
						<Squares2x2Icon class="h-5 w-5" />
						Dashboard
						{#if currentRouterName === 'app/dashboard'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/leads">
						<InboxArrowDownIcon class="w-5 h-5" />
						Leads
						{#if currentRouterName === 'app/leads'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/transactions">
						<CurrencyDollarIcon class="w-5 h-5" />
						Transactions
						{#if currentRouterName === 'app/transactions'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/charts">
						<ChartBarIcon class="w-5 h-5"></ChartBarIcon>Analytics
						{#if currentRouterName === 'app/charts'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/integration">
						<BoltIcon class="h-5 w-5 inline-block" />Integration
						{#if currentRouterName === 'app/integration'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<a class="font-normal" href="/app/calendar">
						<CalendarDaysIcon class="w-5 h-5" />Calendar
						{#if currentRouterName === 'app/calendar'}
							<span
								class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
								aria-hidden="true"
							/>
						{/if}
					</a>
				</li>
				<li>
					<div class="flex flex-col">
						<button
							type="button"
							class="w-full block"
							onclick={() => (isPageMenuExpanded = !isPageMenuExpanded)}
						>
							<DocumentDuplicateIcon class="h-6 w-6 inline float-start" />
							<span class="float-start ml-1">Pages</span>

							<ChevronDown
								class={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${isPageMenuExpanded ? 'rotate-180' : ''}`}
							/>
						</button>

						<div hidden={isPageMenuExpanded} class="w-full">
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
						<button
							type="button"
							class="w-full block"
							onclick={() => (isSettingsMenuExpanded = !isSettingsMenuExpanded)}
						>
							<Cog6ToothIcon
								class={`h-6 w-6 inline float-start delay-400 duration-500 transition-all ${isSettingsMenuExpanded ? 'rotate-180' : ''}`}
							/>
							<span class="float-start ml-1">Settings</span>

							<ChevronDown
								class={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${isSettingsMenuExpanded ? 'rotate-180' : ''}`}
							/>
						</button>
						<div hidden={isSettingsMenuExpanded} class=" w-full">
							<ul class="menu menu-compact">
								<li>
									<a href="/app/settings-profile">
										<UserIcon class="h-5 w-5" />
										Profile
										{#if currentRouterName === 'app/settings-profile'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
								<li>
									<a href="/app/settings-billing">
										<WalletIcon class="h-5 w-5" />
										Billing
										{#if currentRouterName === 'app/settings-billing'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
								<li>
									<a href="/app/settings-team">
										<UsersIcon class="h-5 w-5" />
										Team Members
										{#if currentRouterName === 'app/settings-team'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="flex flex-col">
						<button
							type="button"
							class="w-full block"
							onclick={() => (isDocumentationMenuExpanded = !isDocumentationMenuExpanded)}
						>
							<DocumentTextIcon class="w-6 h-6 inline float-start" />

							<span class="float-start ml-1">Documentation</span>

							<ChevronDown
								class={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${isDocumentationMenuExpanded ? 'rotate-180' : ''}`}
							/>
						</button>
						<div hidden={isDocumentationMenuExpanded} class=" w-full">
							<ul class="menu menu-compact">
								<li>
									<a href="/app/getting-started">
										<DocumentTextIcon class="w-5 h-5 inline" />
										Getting Started
										{#if currentRouterName === 'app/getting-started'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
								<li>
									<a href="/app/features"
										><TableCellsIcon class="h-5 w-5" />
										Features
										{#if currentRouterName === 'app/features'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
								<li>
									<a href="/app/components"
										><CodeBracketSquareIcon class="h-5 w-5" />
										Components

										{#if currentRouterName === 'app/components'}
											<span
												class="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
												aria-hidden="true"
											/>
										{/if}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
{/if}
