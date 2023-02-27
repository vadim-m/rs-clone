export class StatisticChart1 {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <!--Slide 1-->
    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
    <div class="carousel-item absolute opacity-0 hidden">
      <div class="block w-full bg-myslate h-10 shadow-md dark:bg-slate-400 dark:shadow-inner"></div>
      <div class="mb-6 flex flex-col">
        <div class="mt-2 text-center">Общие расходы за 2023 г.</div>
        <div class="flex justify-center">
          <canvas id="acquisitions" class="my-auto" style="max-width: 250px; max-height: 250px"></canvas>
        </div>
      </div>
      <div class="statistic__legend mb-8">
        <div class="statistic__fuels item flex pr-10 border-b border-t border-r border-slate">
          <div class="item__color w-4" style="background-color: rgb(250, 32, 32)"></div>
          <div class="item__inner flex justify-between w-full pl-2 py-2">
            <div class="item__title">Заправки</div>
            <div class="item__after"><span><span class="item__sum" id="stat1"></span>  ₽</span></div>
          </div>
      </div>
      <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
        <div class="item__color w-4" style="background-color: rgb(54, 162, 235)"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2">
          <div class="item__title">Сервис</div>
          <div class="item__after"><span><span class="item__sum" id="stat2"></span>  ₽</span></div>
        </div>
      </div>
      <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
        <div class="item__color w-4" style="background-color: rgb(255, 205, 86)"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2">
          <div class="item__title">Другие расходы</div>
          <div class="item__after"><span><span class="item__sum" id="stat3"></span>  ₽</span></div>
        </div>
      </div>
      <div class="statistic__fuels item flex pr-2 border-b  border-l border-r border-slate">
        <div class="item__color w-4"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2">
          <div class="item__title">Всего</div>
          <div class="item__after"><span class="item__sum" id="stat4"></span><span id="stat__value">  ₽</span></div>
        </div>
      </div>
    </div>  

      <div class="statistic__all pb-20">
      <div class="statistic__all_title font-bold text-lg flex justify-center">Стоимость содержания: </div>
      <div class="statistic__all_content grid grid-cols-2">
        <div class="flex flex-col items-center">
          <div>Стоимость дня:</div>
          <div><span class="text-xl" id="wallet__day">18.45</span><span id="wallet__currency"> ₽/День</span></div>
        </div>
        <div class="flex flex-col items-center">
          <div>Стоимость км.:</div>
          <div><span class="text-xl" id="distance__wallet">0.25</span><span class="distance__currency"> ₽/км.</span></div>
        </div>
      </div>
    </div>    
  </div>
  
    <label for="carousel-3" class="prev control-1 absolute hidden text-xl leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
    <label for="carousel-2" class="next control-1 absolute cursor-pointer hidden text-xl text-myblue hover:text-white leading-tight text-center z-10 top-2 right-0 mr-12">Расход</label>
    `;
  }
}
