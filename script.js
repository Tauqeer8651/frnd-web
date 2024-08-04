document.getElementById('unwrapButton').addEventListener('click', function() {
    const giftWrap = document.getElementById('giftWrap');
    const giftContent = document.getElementById('giftContent');
    const message = document.getElementById('message');

    // Unwrap the gift
    giftWrap.style.transform = 'scale(0)';
    giftContent.style.opacity = '1';
    message.classList.remove('hidden');
});
