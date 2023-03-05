import { eventLang } from '../../lang/addEventLang';

export class AboutUsPage {
  parent: HTMLElement;
  navigateTo: (path: string) => void;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.createElement();
    this.addEvents();
  }

  addEvents() {
    const a = 1;
    console.log(a);
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('aboutUs');
    fragment.innerHTML = `
    <!-- Page Container -->
    <div class="flex items-center justify-center mt-8">
        <div class="flex flex-col mt-8 ">
            <!-- Meet the Team -->
            <div class="container max-w-7xl px-4">
                <!-- Team Members -->
                <div class="flex flex-wrap justify-around">
                    <!-- Member #1 -->
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                            <!-- Avatar -->
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80">
                            </a>

                            <!-- Details -->
                            <div class="text-center mt-6">
                                <!-- Name -->
                                <h1 class="text-gray-900 text-xl font-bold mb-1 dark:text-white">
                                ${eventLang().team}
                                </h1>

                                <!-- Title -->
                                <div class="text-gray-700 font-light mb-2">
                                ${eventLang().member}
                                </div>

                                <!-- Social Icons -->
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                  <a href="https://github.com/d1van007" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Member #2 -->
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                            <!-- Avatar -->
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80">
                            </a>

                            <!-- Details -->
                            <div class="text-center mt-6">
                                <!-- Name -->
                                <h1 class="text-gray-900 text-xl font-bold mb-1 dark:text-white">
                                ${eventLang().team2}
                                </h1>

                                <!-- Title -->
                                <div class="text-gray-700 font-light mb-2">
                                ${eventLang().member}
                                </div>

                                <!-- Social Icons -->
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                  <a href="https://github.com/Varvarkadikarka" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Member #3 -->
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                            <!-- Avatar -->
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80">
                            </a>

                            <!-- Details -->
                            <div class="text-center mt-6">
                                <!-- Name -->
                                <h1 class="text-gray-900 text-xl font-bold mb-1 dark:text-white">
                                  ${eventLang().teamlead} 
                                </h1>

                                <!-- Title -->
                                <div class="text-gray-700 font-light mb-2">
                                ${eventLang().lead}
                                </div>

                                <!-- Social Icons -->
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                  <a href="https://github.com/vadim-m" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                
                <div class="bg-zinc-700 rounded-md flex justify-around items-center">
                  <span class="text-white text-lg font-bold">2023</span>
                  <a href="https://rs.school/" class="flex rounded-full hover:bg-indigo-50 h-24 w-24">
                      <img src="https://rs.school/images/partners/logo-rs.svg">
                  </a>
                </div>
            </div>
        </div>
     </div>
    `;
    this.parent.append(fragment);
  }
}
