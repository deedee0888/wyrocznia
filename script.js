  
   
   function rose(){

    var title = document.createElement('h2');
    var name = document.createTextNode('Róża');
    title.appendChild(name);

    var content = document.createElement('p');
    var fotruneContent = document.createTextNode('Znajdziesz pewną rzecz. Może ona być ważna.');
    content.appendChild(fotruneContent);

    var element = document.getElementById('fortune');

    element.innerHTML = '';

    element.appendChild(title);
    element.appendChild(content);

   }

   function turtle(){

    var title = document.createElement('h2');
    var name = document.createTextNode('Żółw');
    title.appendChild(name);

    var content = document.createElement('p');
    var fotruneContent = document.createTextNode('Nie panikuj.');
    content.appendChild(fotruneContent);

    var element = document.getElementById('fortune');
    element.innerHTML = '';

    element.appendChild(title);
    element.appendChild(content);
   }

   function cup(){
    var title = document.createElement('h2');
    var name = document.createTextNode('Filiżanka');
    title.appendChild(name);

    var content = document.createElement('p');
    var fotruneContent = document.createTextNode('Koniec jest bliski, możesz równie dobrze zjeść już deser.');
    content.appendChild(fotruneContent);

    var element = document.getElementById('fortune');
    element.innerHTML = '';
    console.log(element);

    element.appendChild(title);
    element.appendChild(content);
   }

   function moon(){
    var title = document.createElement('h2');
    var name = document.createTextNode('Księżyc');
    title.appendChild(name);

    var content = document.createElement('p');
    var fotruneContent = document.createTextNode('Sprawdzaj, zanim skoczysz. Albo weź spadochron.');
    content.appendChild(fotruneContent);

    var element = document.getElementById('fortune');
    element.innerHTML = '';

    element.appendChild(title);
    element.appendChild(content);
   }