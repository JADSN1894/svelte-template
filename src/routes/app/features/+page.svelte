<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Documentation';

	const CODE_ONE = `[RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR] : 
<TestRightSideBar {...extraObject} closeRightDrawer={close}/>`;
	const CODE_TWO = `import { useDispatch } from "react-redux"
  const dispatch = useDispatch()
  dispatch(openRightDrawer({header : "Test Right Drawer", 
  bodyType : RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR}))`;
	const CODE_THREE = `import { useDispatch } from "react-redux"
  const dispatch = useDispatch()
  dispatch(openRightDrawer({header : "Test Right Drawer", 
  bodyType : RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR}))
`;
	const CODE_FOUR = `import { useDispatch } from "react-redux"
  const dispatch = useDispatch()
  dispatch(showNotification({message : "Message here", status : 1}))`;
</script>

<main class="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200">
	<div class="">
		<div class="bg-base-100 flex overflow-hidden rounded-lg" style="height: 82vh;">
			<div class="flex-none p-4">
				<ul class="menu w-56 mt-10 text-sm">
					<li class="menu-title"><span class="">Features</span></li>
					<li class="bordered"><span>Authentication</span></li>
					<li class=""><span>Sidebar</span></li>
					<li class=""><span>Add New Page</span></li>
					<li class=""><span>Right sidebar</span></li>
					<li class=""><span>Themes</span></li>
					<li class=""><span>Modal</span></li>
					<li class=""><span>Notification</span></li>
				</ul>
			</div>
			<div class="grow pt-16 overflow-y-scroll">
				<article class="prose">
					<h1 class="">Features</h1>
					<h2 id="feature1">Authentication</h2>
					<p>
						JWT based Authentication logic is present in <span class="badge mt-0 mb-0 badge-ghost"
							>/app/auth.js</span
						>. In the file you can see we are adding bearer token in header for every request. Every
						routes under <span class="badge mt-0 mb-0 badge-ghost">/routes/</span> folder will need
						authentication. For public routes like login, register you will have to add routes in
						<span class="badge mt-0 mb-0 badge-ghost">App.js</span>
						file and also include the path in PUBLIC_ROUTES variable under
						<span class="badge mt-0 mb-0 badge-ghost">/app/auth.js</span> file so that auto redirect
						to login page is not triggered.
					</p>
					<h2 id="feature2">Left Sidebar</h2>
					<p>
						This is main internal navigation (for pages that will come after login only), all
						sidebar menu items with their icons are present in <span
							class="badge mt-0 mb-0 badge-ghost">/routes/sidebar.js</span
						>
						file, while path and page components mapping are respectively present in
						<span class="badge mt-0 mb-0 badge-ghost">/routes/index.js</span> file.
					</p>
					<h2 id="feature3">Add New Page</h2>
					<p>
						All <span class="font-semibold">public routes</span> are present in
						<span class="badge mt-0 mb-0 badge-ghost">App.js</span> file. Steps to add new public page
						-
					</p>
					<ul class="mt-0">
						<li>
							Create Page inside <span class="badge mt-0 mb-0 badge-ghost">/pages</span> folder
						</li>
						<li>
							Go to <span class="badge mt-0 mb-0 badge-ghost">App.js</span> and import the component
							and add its path
						</li>
						<li>
							Add your new route path in <span class="badge mt-0 mb-0 badge-ghost"
								>/app/auth.js</span
							> file under PUBLIC_ROUTES variable, this will allow the page to open without login.
						</li>
					</ul>
					<p class="mt-4">
						All <span class="font-semibold">protected routes</span> are present in
						<span class="badge mt-0 mb-0 badge-ghost">/routes/sidebar.js</span> file
					</p>
					<ul class="mt-0">
						<li>
							Create your page inside <span class="badge mt-0 mb-0 badge-ghost"
								>/pages/protected</span
							> folder
						</li>
						<li>
							Add your new routes in <span class="badge mt-0 mb-0 badge-ghost"
								>/routes/sidebar.js</span
							>, this will show your new page in sidebar
						</li>
						<li>
							Import your new routes component and map its path in <span
								class="badge mt-0 mb-0 badge-ghost">/routes/index.js</span
							>
						</li>
					</ul>
					<h2 id="feature4">Right Sidebar</h2>
					<div>
						This is used for showing long list contents like notifications, settings etc.. We are
						using redux to show and hide and it is single component and can be called from any file
						with dispatch method. To add new content follow following steps:
						<ul>
							<li>Create new component file containing main body of your content</li>
							<li>
								Create new variable in <span class="badge mt-0 mb-0 badge-ghost"
									>/utils/globalConstantUtils.js</span
								> file under RIGHT_DRAWER_TYPES variable
							</li>
							<li>
								Now include the file mapped with the new variable in <span
									class="badge mt-0 mb-0 badge-ghost">/containers/RightSidebar.js</span
								>
								file using switch. <br />For ex- If you new component name is
								<span class="badge mt-0 mb-0 badge-ghost">TestRightSideBar.js</span>
								and variable name is TEST_RIGHT_SIDEBAR, then add following code inside switch code block<br
								/>
								<div class="mockup-code mt-4">
									<pre class="my-0 py-0"><code>{CODE_ONE}</code></pre>
								</div>
							</li>
						</ul>
					</div>
					<h2 id="feature5">Themes</h2>
					<p>
						By default we have added light and dark theme and Daisy UI comes with a number of
						themes, which you can use with no extra effort, you just have to include it in <span
							class="badge mt-0 mb-0 badge-ghost">tailwind.config.js</span
						>
						file, you can add themes like cupcake, corporate, reto etc... Also we can configure themes
						colors in config file, for more documentation on themes checkout
						<a href="https://daisyui.com/docs/themes/" target="_blank">Daisy UI documentation.</a>
					</p>
					<h2 id="feature6">Modal</h2>
					<div>
						With global modal functionality you dont have to create seperate modal for each page. We
						are using redux to show and hide and it is a single component and can be called from any
						file with dispatch method. Code for showing modal is present in modalSlice and layout
						container component. To show modal just call openModal() function of modalSlice using
						dispatch.<br />To add new modal in any page follow following steps:
						<ul>
							<li>Create new component file containing main body of your modal content</li>
							<li>
								Create new variable in <span class="badge mt-0 mb-0 badge-ghost"
									>/utils/globalConstantUtils.js</span
								> file under MODAL_BODY_TYPES variable
							</li>
							<li>
								Now include the file mapped with the new variable in <span
									class="badge mt-0 mb-0 badge-ghost">/containers/ModalLayout.js</span
								>
								file using switch. <br />For ex- If you new component name is
								<span class="badge mt-0 mb-0 badge-ghost">TestModal.js</span>
								and variable name is TEST_MODAL, then add following code inside switch code block<br
								/>
								<div class="mockup-code mt-4">
									<pre class="my-0 py-0"><code>{CODE_TWO}</code></pre>
								</div>
								<span class="text-sm mt-1 italic"
									>Here extraObject have variables that is passed from parent component while
									calling openModal method</span
								>
							</li>
							<li>
								Now the last step, call dispatch method as follows
								<div class="mockup-code mt-1">
									<pre class="my-0 py-0"><code>{CODE_THREE}</code></pre>
								</div>
							</li>
						</ul>
					</div>
					<h2 id="feature7">Notification</h2>
					<p>
						Many times we have to show notification to user be it on successfull form submission or
						any api success. And requirement can come to show notification from any page, so global
						notification handling is needed.
					</p>
					<p class="mt-4">
						Code for showing notification is present in headerSlice and layout container component.
						To show notification just call <span class="badge badge-ghost">showNotification()</span>
						function of headerSlice using dispatch. To show success message notification pass status
						as 1 and for showing error message pass status as 0.
					</p>
					<div class="mockup-code mb-4"><pre class="my-0 py-0"><code>{CODE_FOUR}</code></pre></div>
					<p>Click on this button to check</p>
					<button class="btn btn-success">Success</button><button class="btn btn-error ml-4"
						>Error</button
					>
					<div class="h-24"></div>
				</article>
			</div>
		</div>
	</div>
	<div class="h-16"></div>
</main>
