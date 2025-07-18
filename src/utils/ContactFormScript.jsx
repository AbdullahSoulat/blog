// src/components/ContactFormScript.jsx
export default function ContactFormScript() {
	if (typeof window === 'undefined') return null;

	const form = document.getElementById('contact-form');
	const popup = document.getElementById('success-popup');
	const closeBtn = document.getElementById('close-popup');

	if (!form || !popup || !closeBtn) return null;

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		try {
			await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString(),
			});

			form.reset();
			popup.classList.remove('hidden');
		} catch (err) {
			alert('Submission failed.');
		}
	});

	closeBtn.addEventListener('click', () => {
		popup.classList.add('hidden');
	});

	return null;
}
