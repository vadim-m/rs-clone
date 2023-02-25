export class SignupForm {
  public element: string;
  private id: string;

  constructor(id: string) {
    this.id = id;
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
      <form class="mt-6" id="${this.id}-form">

        <div>
          <label class="block text-gray-700">Your Name</label>
          <input type="text" name="user" placeholder="Enter Full Name" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autocomplete required>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="pass" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autocomplete required>
        </div>

        <div class="invisible mt-8 bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 w-full" id="${this.id}-alert">
          Alert
        </div>

        <button type="submit" class="w-full block bg-indigo-500 enabled:hover:bg-indigo-400 enabled:focus:bg-indigo-400 disabled:opacity-25 disabled:cursor-wait text-white font-semibold rounded-lgpx-4 py-3 mt-6" id="${this.id}-btn">
          Sign Up
        </button>
      </form>
    `;
  }
}
