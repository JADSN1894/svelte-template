<script lang="ts">
	import PageContent from './PageContent.svelte';
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<PageContent />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a href="/">Sidebar Item 1</a></li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
