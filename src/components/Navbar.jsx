
import { Link } from "react-router-dom"
import userStore from "../store/userStore"
export default function Navbar() {
  const {user} = userStore()
  return(
<header class="bg-white">
  <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <h1 className="text-xl font-bold">
          {user?.username}
        </h1>
      </a>
    </div>

    <el-popover-group class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <Link to='/'>
        <button popovertarget="desktop-menu-product" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          Home
        </button>
        </Link>
      </div>

      <Link to='/confessions'>
      <span href="" class="text-sm/6 font-semibold text-gray-900">Confessions</span>
      </Link>
      <Link to='/post-confessions'>
      <span href="" class="text-sm/6 font-semibold text-gray-900">Post Confessions</span>
      </Link>
      <Link to='/about'>
      <span href="" class="text-sm/6 font-semibold text-gray-900">About</span>
      </Link>
    </el-popover-group>

{user ? (
  <div></div>
): (
    <div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>

    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/signup" class="text-sm/6 font-semibold text-gray-900">Sign up <span aria-hidden="true">&rarr;</span></a>
    </div>

    </div>
)}
  </nav>
  <el-dialog>
    <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
      <div tabindex="0" class="fixed inset-0 focus:outline-none">
        <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold">
              {user?.username}
            </h1>
            <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <div class="-mx-3">
                  <button type="button" command="--toggle" commandfor="products" class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Home
                  </button>
                </div>
                <a href="/confessions" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Confessions</a>
                <a href="/post-confessions" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Post Confessions</a>
                <a href="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
              </div>

              {user ? (
                <div></div>
              ): (
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
              )}
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</header>
  )
}