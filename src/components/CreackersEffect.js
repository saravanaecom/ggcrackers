import React, { useEffect } from 'react';

const CreackersEffect = () => {
  useEffect(() => {
    const bits = 80;
    const speed = 33;
    const bangs = 5;
    const colours = ['#03f', '#f03', '#0e0', '#93f', '#0cf', '#f93', '#f0c'];
    const bangheight = [];
    const intensity = [];
    const colour = [];
    const Xpos = [];
    const Ypos = [];
    const dX = [];
    const dY = [];
    const stars = [];
    const decay = [];

    let swide = window.innerWidth;
    let shigh = window.innerHeight;
    let boddie;

    const createDiv = (char, size) => {
      const div = document.createElement('div');
      div.style.font = `${size}px monospace`;
      div.style.position = 'absolute';
      div.style.backgroundColor = 'transparent';
      div.style.visibility = 'hidden';
      div.appendChild(document.createTextNode(char));
      return div;
    };

    const write_fire = (i) => {
      stars[i + 'r'] = createDiv('|', 12);
      boddie.appendChild(stars[i + 'r']);
      for (let j = bits * i; j < bits * (i + 1); j++) {
        stars[j] = createDiv('*', 13);
        boddie.appendChild(stars[j]);
      }
    };

    const launch = (i) => {
      colour[i] = Math.floor(Math.random() * colours.length);
      Xpos[i + 'r'] = swide * 0.5;
      Ypos[i + 'r'] = shigh - 5;
      bangheight[i] = Math.round((0.5 + Math.random()) * shigh * 0.4);
      dX[i + 'r'] = (Math.random() - 0.5) * swide / bangheight[i];

      const ch = dX[i + 'r'] > 1.25 ? '/' : dX[i + 'r'] < -1.25 ? '\\' : '|';
      stars[i + 'r'].firstChild.nodeValue = ch;
      stars[i + 'r'].style.color = colours[colour[i]];
    };

    const bang = (i) => {
      let finished = 0;
      for (let j = bits * i; j < bits * (i + 1); j++) {
        const s = stars[j].style;
        s.left = `${Xpos[j]}px`;
        s.top = `${Ypos[j]}px`;

        if (decay[j]) {
          decay[j]--;
        } else {
          finished++;
        }

        if (decay[j] === 15) s.fontSize = '7px';
        else if (decay[j] === 7) s.fontSize = '2px';
        else if (decay[j] === 1) s.visibility = 'hidden';

        Xpos[j] += dX[j];
        Ypos[j] += dY[j] += 1.25 / intensity[i];
      }

      if (finished !== bits) {
        setTimeout(() => bang(i), speed);
      }
    };

    const stepthrough = (i) => {
      let x = Xpos[i + 'r'];
      let y = Ypos[i + 'r'];
      Xpos[i + 'r'] += dX[i + 'r'];
      Ypos[i + 'r'] -= 4;

      if (Ypos[i + 'r'] < bangheight[i]) {
        const randomColour = Math.floor(Math.random() * 3 * colours.length);
        intensity[i] = 5 + Math.random() * 4;

        for (let j = bits * i; j < bits * (i + 1); j++) {
          Xpos[j] = Xpos[i + 'r'];
          Ypos[j] = Ypos[i + 'r'];
          dY[j] = (Math.random() - 0.5) * intensity[i];
          dX[j] = (Math.random() - 0.5) * (intensity[i] - Math.abs(dY[j])) * 1.25;
          decay[j] = 16 + Math.floor(Math.random() * 16);

          const r = stars[j];
          if (randomColour < colours.length)
            r.style.color = colours[j % 2 ? colour[i] : randomColour];
          else if (randomColour < 2 * colours.length)
            r.style.color = colours[colour[i]];
          else
            r.style.color = colours[j % colours.length];

          r.style.fontSize = '13px';
          r.style.visibility = 'visible';
          //r.style.position = 'relative';
          //r.style.zIndex = 999;
        }

        bang(i);
        launch(i);
      }

      stars[i + 'r'].style.left = `${x}px`;
      stars[i + 'r'].style.top = `${y}px`;
    };

    const set_width = () => {
      swide = window.innerWidth;
      shigh = window.innerHeight;
    };

    // Initialize on mount
    const init = () => {
      boddie = document.createElement('div');
      boddie.style.position = 'fixed';
      boddie.style.top = '0px';
      boddie.style.left = '0px';
      boddie.style.overflow = 'visible';
      boddie.style.width = '1px';
      boddie.style.height = '1px';
      boddie.style.backgroundColor = 'transparent';
      document.body.appendChild(boddie);

      set_width();

      for (let i = 0; i < bangs; i++) {
        write_fire(i);
        launch(i);
        setInterval(() => stepthrough(i), speed);
      }
    };

    init();
    window.addEventListener('resize', set_width);

    return () => {
      window.removeEventListener('resize', set_width);
      document.body.removeChild(boddie);
    };
  }, []);

  return null;
};

export default CreackersEffect;
