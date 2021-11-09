'use strict';

{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0 ;
    }
    
    let words;
    let word;
    let loc;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');
    const result = document.getElementById('result');

    document.addEventListener('click',() => {
        if (isPlaying) {
            return;
        }

        words = [
            'wanderwall',
            'whatever',
            'live forever',
            'morning glory',
            'some might say',
            'the importance of being idle',
            'acquiesce',
            'supersonic',
            'songbird'
        ];
        result.textContent = ``;
        isPlaying = true;
        startTime = Date.now();
        setWord();
    })

    document.addEventListener('keydown', e => {
        // if (e.key !== word[loc]) {
        //     return;
        // }

        loc++;

        // 1:_ed
        // 2:__d
        // 3:___
        target.textContent = '_'.repeat(loc) + word.substring(loc);

        if (loc === word.length) {
            if (words.length === 3) {
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                result.textContent = `Finished! ${elapsedTime} seconds! Click to start`;
                isPlaying = false;
                return;
            }

            setWord();
        }
    });
}