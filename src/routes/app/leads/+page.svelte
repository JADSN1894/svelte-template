<script lang="ts">
	//* Icons
	import TrashIcon from '$icons/hero-icons/TrashIcon.svelte';

	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Leads';
</script>

<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
	<div class="text-xl font-semibold inline-block">
		Current Leads
		<div class="inline-block float-right">
			<div class="inline-block float-right">
				<button class="btn px-6 btn-sm normal-case btn-primary">Add New</button>
			</div>
		</div>
	</div>
	<div class="divider mt-2"></div>
	<div class="h-full w-full pb-6 bg-base-100">
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email Id</th>
						<th>Created At</th>
						<th>Status</th>
						<th>Assigned To</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/7-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Michael</div>
									<div class="text-sm opacity-50">Lawson</div>
								</div>
							</div>
						</td>
						<td>michael.lawson@reqres.in</td>
						<td>26 Mar 24</td>
						<td>
							<div class="badge">Not Interested</div>
						</td>
						<td>Lawson</td>
						<td>
							<button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/8-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Lindsay</div>
									<div class="text-sm opacity-50">Ferguson</div>
								</div>
							</div>
						</td>
						<td>lindsay.ferguson@reqres.in</td>
						<td>21 Mar 24</td>
						<td>
							<div class="badge badge-primary">In Progress</div>
						</td>
						<td>Ferguson</td>
						<td>
							<button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/9-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Tobias</div>
									<div class="text-sm opacity-50">Funke</div>
								</div>
							</div>
						</td>
						<td>tobias.funke@reqres.in</td>
						<td>16 Mar 24</td>
						<td>
							<div class="badge badge-secondary">Sold</div>
						</td>
						<td>Funke</td>
						<td
							><button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/10-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Byron</div>
									<div class="text-sm opacity-50">Fields</div>
								</div>
							</div>
						</td>
						<td>byron.fields@reqres.in</td>
						<td>11 Mar 24</td>
						<td>
							<div class="badge badge-accent">Need Followup</div>
						</td>
						<td>Fields</td>
						<td>
							<button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/11-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">George</div>
									<div class="text-sm opacity-50">Edwards</div>
								</div>
							</div>
						</td>
						<td>george.edwards@reqres.in</td>
						<td>06 Mar 24</td>
						<td>
							<div class="badge badge-ghost">Open</div>
						</td>
						<td>Edwards</td>
						<td>
							<button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="https://reqres.in/img/faces/12-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Rachel</div>
									<div class="text-sm opacity-50">Howell</div>
								</div>
							</div>
						</td>
						<td>rachel.howell@reqres.in</td>
						<td>01 Mar 24</td>
						<td>
							<div class="badge">Not Interested</div>
						</td>
						<td>Howell</td>
						<td>
							<button class="btn btn-square btn-ghost">
								<TrashIcon class="w-5" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
<div class="h-16"></div>
