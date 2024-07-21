<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>

<div class="px-3 max-w-4xl mx-auto mt-20">
	<Accordion>
		<AccordionItem class="border border-black text-black">
			<span slot="header" class="uppercase">Jak robić zakupy i składać zamówienie</span>
			<p class="my-2 font-bold">Czy potrzebuję konta, aby złożyć zamówienie?</p>
			<p class="">Nie. Moźesz zloźyć zamówienie na Whatsapp, Telegram i przez Instagram.</p>
			<p class="my-2 font-bold">Jak otrzymywać aktualizacje e-mailowe od DEUXMONTEE?</p>
			<p class="">
				Pozostań na bieżąco z nowościami, trendami i ekskluzywnymi promocjami, wpisując swój adres
				e-mail na dole naszej strony głównej.
			</p>
			<p class="my-2 font-bold">Jak złożyć zamówienie na waszej stronie internetowej?</p>
			<p class="">Oto jak:</p>
			<ol class="list-disc ps-5">
				<li>Wybierz kategorię lub markę z górnego menu nawigacyjnego</li>
				<li>Wybierz pożądany przedmiot i kliknij "Kup przez WhatsApp" lub "Kup przez Telegram"</li>
				<li>Podaj rozmiar ktory chcesz kupić, i wyślij wiadomość</li>
				<li>
					Dostaniesz informacje jak zapłacić za towar i gdzie bedziesz mógla podać adres wysyłkowy
				</li>
			</ol>
			<p class="my-2 font-bold">Czy mogę złożyć zamówienie przez telefon?</p>
			<p class="">
				Oczywiście. Nasi globalni doradcy obsługi klienta z przyjemnością Ci w tym pomogą.
			</p>
			<p class="my-2 font-bold">
				Czy mogę anulować moje zamówienie DEUXMONTEE lub wprowadzić w nim zmiany?
			</p>
			<p class="">
				Tak, możesz anulować niektóre pozycje przed przygotowaniem zamówienia. Napisz do nas na
				Whatsapp'ie i wszystkim się zajmiemy!
			</p>
		</AccordionItem>
		<AccordionItem class="border border-black text-black">
			<span slot="header" class="uppercase">Ceny na DEUXMONTEE i płatności</span>
			<p class="my-2 font-bold">Dlaczego ceny na FARFETCH są różne?</p>
			<p class="">Pracujemy z najlepszymi wytwórniami źeby stworzyć niezapomniane produkty.</p>
			<p class="my-2 font-bold">W jakich walutach mogę robić zakupy?</p>
			<p class="">Możesz dokonywać zakupów w USD i Polskich złotych</p>
			<p class="my-2 font-bold">Kiedy zostanie obciążona moja karta?</p>
			<p class="">
				Jeśli płacisz kartą debetową, kryptowalutą lub PayPal, DEUXMONTEE pobierze płatność w
				momencie złożenia zamówienia.
			</p>
			<p class="my-2 font-bold">Jakie metody płatności akceptujecie?</p>
			<ol class="list-disc ps-5">
				<li>Visa</li>
				<li>Mastercard</li>
				<li>Blik</li>
				<li>Bitcoin</li>
			</ol>
			<p class="my-2 font-bold">Czy moje dane osobowe pozostaną bezpieczne?</p>
			<p class="">
				Absolutnie. Przechowujemy Twoje dane osobowe w sposób prywatny i poufny i udostępniamy je
				tylko za Twoją zgodą lub jeśli jest to prawnie dozwolone. Aby uzyskać więcej informacji,
				zapoznaj się z Polityką Prywatności DEUXMONTEE.
			</p>
		</AccordionItem>
		<AccordionItem class="border border-black text-black">
			<span slot="header" class="uppercase">ZWROTY I REFUNDACJE</span>
			<p class="my-2 font-bold">Jaka jest polityka zwrotów DEUXMONTEE?</p>
			<p class="">
				Oferujemy zwrot pieniędzy za wszystkie przedmioty zwrócone do nas w ciągu 30 dni od daty
				dostawy, z wyłączeniem kosztów dostawy. Możesz skorzystać z naszej usługi bezpłatnego
				odbioru, aby zwrócić niechciane przedmioty. <br />
				Wszystkie zwrócone przedmioty muszą być nieużywane, nienoszone i w idealnym stanie, z dołączonymi
				wszystkimi metkami. Wszystkie opakowania projektanta lub etui, które otrzymałeś z zamówieniem,
				muszą być dołączone do zwrotu. Jeśli cokolwiek będzie uszkodzone lub brakujące, możesz nie otrzymać
				zwrotu pieniędzy. Przeczytaj pełną Politykę Zwrotów tutaj.
			</p>
			<p class="my-2 font-bold">Jak zwrócić przedmiot?</p>
			<p class="">Napisz do nas na Whatsapp'ie lub Telegramie</p>
			<p class="my-2 font-bold">
				Czy moje zamówienie musi być zwrócone w opakowaniu DEUXMONTEE, w którym zostało dostarczone?
			</p>
			<p class="">
				Zalecamy zwrócenie przedmiotu w dostarczonym opakowaniu FARFETCH wielokrotnego użytku, ale
				jeśli nie jest to możliwe, znajdź odpowiednie pudełko, aby przedmioty zostały zwrócone w
				nienaruszonym stanie. Przedmioty muszą być zwrócone nienaruszone i nieużywane, z dołączonymi
				wszystkimi metkami, w tym oryginalnym opakowaniem i opakowaniami marki.
			</p>

			<p class="my-2 font-bold">Kiedy otrzymam zwrot pieniędzy?</p>
			<p class="">
				Możesz śledzić swój zwrot, używając numeru śledzenia przypisanego do etykiety zwrotnej. Po
				otrzymaniu zwrotu przez naszą markę lub partnerski butik, jego przetworzenie może potrwać do
				6 dni kalendarzowych. Gdy tylko zostanie zaakceptowany, wyślemy Ci e-mail z potwierdzeniem. <br
				/>

				Zwrot pieniędzy zostanie przetworzony na oryginalną metodę płatności. Może to potrwać do 14
				dni, aby pojawić się na Twoim koncie, w zależności od dostawcy płatności.
			</p>
		</AccordionItem>
	</Accordion>

	<Footer footerType="socialmedia">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0 font-league">
				<h2>DEUXMONTEE</h2>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Resources
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Polityka Prywatności</FooterLink>
						<FooterLink liClass="mb-4" href="/">Regulamin</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Follow us
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Skontaktuj sie z nami</FooterLink>
						<FooterLink liClass="mb-4" href="/">Promocje</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
						<FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
					</FooterLinkGroup>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterCopyright href="/" by="DEUXMONTEE" />
			<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
				<FooterIcon href="/">
					<FacebookSolid
						class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
					/>
				</FooterIcon>
				<FooterIcon href="/">
					<DiscordSolid
						class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
					/>
				</FooterIcon>
				<FooterIcon href="/">
					<TwitterSolid
						class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
					/>
				</FooterIcon>
			</div>
		</div>
	</Footer>
</div>
