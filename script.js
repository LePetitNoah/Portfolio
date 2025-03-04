document.addEventListener('DOMContentLoaded', function() {
    const radio1 = document.getElementById('diplomes-div');
    const radio2 = document.getElementById('soft-skills-div');
    const radio3 = document.getElementById('hard-skills-div');
    const radio4 = document.getElementById('experiences-div');
    const radio5 = document.getElementById('langues-div');
    const div1 = document.getElementById('diplomes');
    const div2 = document.getElementById('soft-skills');
    const div3 = document.getElementById('hard-skills');
    const div4 = document.getElementById('experiences');
    const div5 = document.getElementById('langues');
    
    radio1.addEventListener('change', function() {
        if (radio1.checked) {
            div1.classList.remove('hidden');
            div2.classList.add('hidden');
            div3.classList.add('hidden');
            div4.classList.add('hidden');
            div5.classList.add('hidden');
        }
    });
    
    radio2.addEventListener('change', function() {
        if (radio2.checked) {
            div1.classList.add('hidden');
            div2.classList.remove('hidden')
            div3.classList.add('hidden');
            div4.classList.add('hidden');
            div5.classList.add('hidden');
        }
    });

    radio3.addEventListener('change', function() {
        if (radio3.checked) {
            div1.classList.add('hidden');
            div2.classList.add('hidden')
            div3.classList.remove('hidden');
            div4.classList.add('hidden');
            div5.classList.add('hidden');
        }
    });

    radio4.addEventListener('change', function() {
        if (radio4.checked) {
            div1.classList.add('hidden');
            div2.classList.add('hidden')
            div3.classList.add('hidden');
            div4.classList.remove('hidden');
            div5.classList.add('hidden');
        }
    });

    radio5.addEventListener('change', function() {
        if (radio5.checked) {
            div1.classList.add('hidden');
            div2.classList.add('hidden')
            div3.classList.add('hidden');
            div4.classList.add('hidden');
            div5.classList.remove('hidden');
        }
    });
});
