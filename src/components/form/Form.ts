export class Form {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
      <form class="mt-6" id="login-form" method="POST">
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="pass" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lgpx-4 py-3 mt-6">
          Log In
        </button>
      </form>
    `;
  }
}
