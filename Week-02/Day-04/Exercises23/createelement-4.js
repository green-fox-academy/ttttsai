window.onload = function(){
    // Remove the king from the list.
    // Fill the list based on the following list of objects.
    // only add the asteroids to the list.
    // each list item should have its category as a class
    // and its content as text content. -->
    var orgLi = document.querySelector('li');
    var list = document.querySelector('ul');
    list.removeChild(orgLi);

    var planetData = [
        {
          category: 'inhabited',
          content: 'Foxes',
          asteroid: true
        },
        {
          category: 'inhabited',
          content: 'Whales and Rabbits',
          asteroid: true
        },
        {
          category: 'uninhabited',
          content: 'Baobabs and Roses',
          asteroid: true
        },
        {
          category: 'inhabited',
          content: 'Giant monsters',
          asteroid: false
        },
        {
          category: 'inhabited',
          content: 'Sheep',
          asteroid: true
        }
    ];
    for(var i = 0; i < planetData.length; i++){
        if(planetData[i].asteroid){
            var newLi = document.createElement('li');
            newLi.setAttribute("class", planetData[i].category);
            newLi.innerText = planetData[i].content;
            list.appendChild(newLi);
        }
        
    }
    
};
