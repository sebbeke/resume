<template>
  <div class="mt-6 max-w-screen-lg md:flex mx-auto">
    <div class="md:w-1/3 p-2 relative">
      <div class="md:fixed">
        <div class="md:block">
          <img
            class="h-32 w-32 rounded-full mx-auto mx-4"
            src="~/static/01.jpg"
            alt="picture of me"
          />
          <div class="mb-12 text-center mt-4 justify-center items-center">
            <h1 class="text-2xl text-xl text-gray-800 font-bold">
              Sebastiaan Jacobs
            </h1>
          </div>
          <div class="my-5 text-gray-600 flex">
            <div class="mr-2">
              <svg focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" height="24" width="24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
            </div>
            <a href="mailto:jacobssebastiaan@gmail.com">jacobssebastiaan@gmail.com</a>
          </div>
          <div class="my-5 text-gray-600 flex">
            <div class="mr-2">
              <svg focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" height="24" width="24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
            </div>
            <a href="tel:0032498120244">+32 498 12 02 44</a>
          </div>
          <div class="my-5 text-gray-600 flex">
            <div class="mr-2">
              <svg focusable="false" data-prefix="fas" data-icon="location-arrow" class="svg-inline--fa fa-location-arrow fa-w-16" height="24" width="24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
            </div>
            Zedelgem, Belgi&euml;
          </div>

          <a href="https://www.linkedin.com/in/sebastiaan-jacobs-228a1042/" target="_blank" class="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900 inline-flex items-center place-content-center">
            <i class="mr-2">
              <svg focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14 h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </i>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div class="md:w-2/3 p-2 w-full">
      <Nuxt />
    </div>
  </div>
</template>
