import React from 'react';
import AnimatedPageTransition from '../components/AnimatedPageTransition';

const Contato = () => {
  return (
    <AnimatedPageTransition>
        <section class=" bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contato</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl">Utilize o formulário abaixo para entrar em contato.</p>
            <form action="https://formspree.io/f/xdoqoapv" method='POST' class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu e-mail</label>
                    <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu Nome</label>
                    <input type="text" name="name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Digite seu nome..." required></input>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua Mensagem</label>
                    <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite sua mensagem..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-500 sm:w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                Confirmar
                </button>
            </form>
        </div>
        </section>
    </AnimatedPageTransition>
  );
};

export default Contato;