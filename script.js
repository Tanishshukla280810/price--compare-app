document.addEventListener("DOMContentLoaded", () => {
  // Show welcome popup
  // Create a background blur overlay
const blurOverlay = document.createElement("div");
blurOverlay.style.position = "fixed";
blurOverlay.style.top = 0;
blurOverlay.style.left = 0;
blurOverlay.style.width = "100%";
blurOverlay.style.height = "100%";
blurOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
blurOverlay.style.backdropFilter = "blur(5px)";
blurOverlay.style.zIndex = "9998";
document.body.appendChild(blurOverlay);

// Show welcome popup
const popup = document.createElement("div");
popup.textContent = "👋 Welcome to Price Comparison Website !";
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.backgroundColor = "#fff";
popup.style.border = "2px solid #ff6a00";
popup.style.padding = "20px 40px";
popup.style.fontSize = "18px";
popup.style.fontWeight = "bold";
popup.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
popup.style.borderRadius = "10px";
popup.style.zIndex = "9999";
popup.style.whiteSpace = "nowrap"; // keeps message on one line
document.body.appendChild(popup);

// Remove both after 2.5s
setTimeout(() => {
  popup.remove();
  blurOverlay.remove();
}, 2500);

  const allProducts = [
  {
    name: "Apple iPhone 15",
    variants: [
      {
        price: 60100,
        source: "Amazon",
        stock: "In Stock",
        link: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY"
      },
      {
        price: 64900,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4"
      }
    ]
  },
  {
    name: "Boat Rockerz 450",
    variants: [
      {
        price: 1399,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/6jwCqrI"
      },
      {
        price: 1399,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nR_pX4NNNN"
      }
    ]
  },
  {
    name: "Sony WH-1000XM4",
    variants: [
      {
        price: 22990,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/2Z3tEZi"
      },
      {
        price: 22990,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/KhpT2QuuuN"
      }
    ]
  },
  {
    name: "Lenovo Legion 5 Pro",
    variants: [
      {
        price: 183780,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/8c46AYq"
      },
      {
        price: 185890,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nRbdjRNNNN"
      }
    ]
  },
  {
    name: "Google Pixel 7",
    variants: [
      {
        price: 30999,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/33O4lnF"
      },
      {
        price: 30999,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/KhJOEouuuN"
      }
    ]
  },
  {
    name: "Samsung Galaxy S23 plus",
    variants: [
      {
        price: 61300,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/817Nw65"
      },
      {
        price: 62999,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/K8NiYouuuN"
      }
    ]
  },
  {
    name: "OnePlus 11",
    variants: [
      {
        price: 39999,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/gNDMlj0"
      },
      {
        price: 37999,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nRMcRfNNNN"
      }
    ]
  },
  {
    name: "Dell XPS 13",
    variants: [
      {
        price: 183375,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/2BJn0Jm"
      },
      {
        price: 109999,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nRxUNmNNNN"
      }
    ]
  },
  {
    name: "HP Spectre x360",
    variants: [
      {
        price: 179235,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/65JiEMA"
      },
      {
        price: 158990,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/KhfelouuuN"
      }
    ]
  },
  {
    name: "Asus ROG Zephyrus G14",
    variants: [
      {
        price: 184990,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/f5H9dgd"
      },
      {
        price: 149990,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/Khz3aNuuuN"
      }
    ]
  },
  {
    name: "Apple MacBook Air M2",
    variants: [
      {
        price: 77990,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/4Etrd1A"
      },
      {
        price: 83990,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nRmLcWNNNN"
      }
    ]
  },
  {
    name: "Xiaomi Mi Band 6",
    variants: [
      {
        price: 3199,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/9FdVt6a"
      },
      {
        price: 2279,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nvUJd4NNNN"
      }
    ]
  },
  {
    name: "Realme GT 6T",
    variants: [
      {
        price: 28999,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/hAs096n"
      },
      {
        price: 26986,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nvKnfnNNNN"
      }
    ]
  },
  {
    name: "Oppo Reno 13 5G",
    variants: [
      {
        price: 37999,
        source: "Amazon",
        stock: "In Stock",
        link: "https://amzn.in/d/4ncSJlr"
      },
      {
        price: 37999,
        source: "Flipkart",
        stock: "In Stock",
        link: "https://dl.flipkart.com/s/nvj4J6NNNN"
      }
    ]
  }
];


  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");

  function renderProducts(products) {
    grid.innerHTML = "";
    products.forEach(product => {
      const container = document.createElement("div");
      container.classList.add("product-item");

      const variants = product.variants.map(v => {
        const stockClass = v.stock.toLowerCase().includes("in") ? "in" : "out";
        const sourceClass = v.source.toLowerCase() === "amazon" ? "source-amazon" : "source-flipkart";

        return `
          <p>
            <span class="price">₹${v.price}</span> -
            <strong class="${sourceClass}">${v.source}</strong>
            <span class="stock ${stockClass}">(${v.stock})</span><br>
            <a href="${v.link}" target="_blank" class="btn-buy">Buy</a>
          </p>
        `;
      }).join("");

      container.innerHTML = `<h3>${product.name}</h3>${variants}`;
      grid.appendChild(container);
    });
  }

  renderProducts(allProducts);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      renderProducts(allProducts);
      return;
    }
    const results = allProducts.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(results);
  });
});
