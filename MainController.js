app.controller('myController', ['$scope', function($scope){
        $scope.carts=[];
        $scope.products = [
          {p_id: "1", p_name: "Air Jordan Air Force One", p_des:"Size 38", p_image: "assets/img/portfolio/8.jpg", p_price: 3000.00},
          {p_id: "2", p_name: "Nike Air Force 1 Shadow", p_des:"Size 36", p_image: "assets/img/portfolio/7.jpg", p_price: 5795.00},
          {p_id: "3", p_name: "Air Force 1 A Ben 7 Jerry", p_des:"Size 37", p_image: "assets/img/portfolio/9.jpg", p_price: 3032.00},
          {p_id: "4", p_name: "Air Jordan 4 x Off-White™️", p_des:"Size 39", p_image: "assets/img/portfolio/10.jpg", p_price: 9800.00},
          {p_id: "5", p_name: "Adidas Ozweego", p_des:"Size 40",  p_image: "assets/img/portfolio/11.jpg", p_price: 4550.00},
          {p_id: "6", p_name: "Yeezy Boost 350 v2 Black Charcoal", p_des:"Size 38", p_image: "assets/img/portfolio/12.png", p_price: 3000.00},
          {p_id: "7", p_name: "Marc Fischer Fall/Winter Boots - Cella Jane", p_des:"Size 37", p_image: "assets/img/portfolio/13.jpg", p_price: 3400.00},
          {p_id: "8", p_name: "2020 Autumn Winter Increase Ankle Shoes", p_des:"Size 37", p_image: "assets/img/portfolio/14.jpg", p_price: 5400.00},

        ];
        
        $scope.add_cart = function(product){
          if(product){
            $scope.carts.push({p_id: product.p_id, p_name: product.p_name,p_des: product.p_des, p_image: product.p_image,p_price: product.p_price });
          } 
        }
            
          
        $scope.total = 0;
        
        $scope.setTotals = function(cart){
          if(cart){
            $scope.total += cart.p_price;
          }
        }
        
        $scope.remove_cart = function(cart){
          if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.p_price;
          }
        }

  }]);
      
