/**
 * Created by RIM on 17.04.16.
 */
module.exports = {
    block: 'page',
    title: 'food',
    head: [
        { elem: 'css', url: 'food.css' }
    ],
    scripts: [
        { elem: 'js', url:'food.js'}
    ],
    content: [
        {

          block: 'slider',
          tag: 'header',
          content: [
            {
              block: 'head-menu',
              content:[
                  {
                      elem: 'left',
                      content: [
                          {
                              block: 'logo',
                              content: [
                                  {
                                      block: 'image',
                                      attrs: { src: '/desktop.blocks/logo/logo.png' }
                                  },
                                  {
                                      elem: 'slogan',
                                      content: 'Online Food order!'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      elem: 'right',
                      content: [
                          {
                              block: 'main-menu',
                              tag: 'ul',
                              content: [
                                  {
                                      elem: 'phone',
                                      tag: 'li',
                                      content: {
                                      block : 'link',
                                      mods : { theme : 'islands', size : 'l'},
                                      url : '#',
                                      content : '1(888)707-2469'
                                  }
                                  },
                                  {
                                      elem: 'menu-item',
                                      tag: 'li',
                                      content : {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'l'},
                                          url : '#',
                                          content : 'HOW IT WORKS'
                                      }
                                  },
                                  {
                                      elem : 'menu-item',
                                      tag: 'li',
                                      content : {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'l'},
                                          url : '#',
                                          content : 'TESTIMONIALS'
                                      }
                                  },
                                  {
                                      elem : 'menu-item',
                                      tag: 'li',
                                      content : {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'l'},
                                          url : '#',
                                          content : 'PRICING'
                                      }
                                  },
                                  {
                                      elem : 'menu-item',
                                      tag: 'li',
                                      content : {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'l'},
                                          url : '#',
                                          content : 'CART'
                                      }
                                  }
                              ]
                          }
                      ]
                  }
              ]
            },
            {
                block: 'feed-me',
                content: [
                    {
                        block: 'title',
                        content: [
                            {
                                elem: 'first',
                                tag: 'h1',
                                content: 'Order Delivery & Take-Out'

                            },
                            {
                                elem: 'second',
                                tag: 'h2',
                                content: 'Find restaurants, specials, and coupons for free'
                            }
                        ]
                    },
                    {
                        block: 'search',
                        tag: 'form',
                        content: [
                              {
                                  block: 'input',
                                  name: 'text',
                                  mods: { food: '1' },
                                  val: 'What is your location ?'
                              },
                              {
                                  block: 'button',
                                  type: 'submit',
                                  text: 'Feed Me',
                                  mods: { food: '1' },
                                  icon : {
                                      block : 'icon',
                                      mods : { action : 'Feed Me' }
                                  }
                              }
                         ]
                    },
                    {
                        block: 'steps',
                        content: {
                            elem: 'image-steps',
                            tag: 'span'
                        }
                    }
                ]
            }
          ]
        },
        {
            block: 'popular',
            tag: 'section',
            content: [
                {
                    block: 'title',
                    mods: { popular: '1'},
                    content: [
                        {
                            elem: 'first',
                            tag: 'h1',
                            content: 'Popular This Month In Your City'

                        },
                        {
                            elem: 'second',
                            tag: 'h2',
                            content: 'The easiest way to your favourite food'
                        }
                    ]
                },
                {
                    block: 'favourite-food',
                    content: [
                        {
                            block: 'eat',
                            content: [
                                {
                                    block: 'slider',
                                    mods: { food : 'eat'},
                                    content: [
                                        {
                                            block: 'distance',
                                            content: {
                                                elem: 'way',
                                                content: '1240m'
                                            }
                                        },
                                        {
                                            block: 'rating',
                                            content :[
                                                {
                                                    block: 'star',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/empty_star.png',
                                                            alt: 'star'

                                                        }

                                                    ]
                                                },
                                                {
                                                    block: 'reviews',
                                                    content: '198 REVIEWS'
                                                }
                                            ]

                                        }
                                    ]
                                },
                                {
                                    block: 'title',
                                    mods: { food: 'eat'},
                                    content: [
                                        {
                                            elem: 'first',
                                            tag: 'h1',
                                            content: "The South's Best Fried Chicken"

                                        },
                                        {
                                            elem: 'second',
                                            tag: 'h2',
                                            content: 'Fried Chicken with cheese'
                                        }
                                    ]
                                },
                                {
                                    block: 'order',
                                    content: [
                                        {
                                            elem: 'price',
                                            content: '$ 15,99'
                                        },
                                        {
                                            block: 'button',
                                            type: 'submit',
                                            text: 'Order Now',
                                            mods: { food: 'eat' }
                                        }
                                    ]
                                },
                                {
                                    block: 'cafe',
                                    content: [
                                        {
                                            block: 'image',
                                            mods: { food: 'eat'},
                                            url: '/desktop.blocks/image/_food/cafe_image.jpg',
                                            alt: 'cafe'
                                        },
                                        {
                                            block: 'title',
                                            mods: { food: 'cafe'},
                                            content: [
                                                {
                                                    elem: 'first',
                                                    tag: 'h1',
                                                    content: "Chicken Restaurant"

                                                },
                                                {
                                                    elem: 'second',
                                                    tag: 'h2',
                                                    content: '68 5th Avenue New York'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'like',
                                            content: [
                                                {
                                                    block: 'image',
                                                    mods: { food: 'like'},
                                                    url: '/desktop.blocks/image/_food/like.png',
                                                    alt: 'like'

                                                },
                                                {
                                                    elem: 'sum',
                                                    content: '48'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'eat',
                            content: [
                                {
                                    block: 'slider',
                                    mods: { food : 'eat'},
                                    content: [
                                        {
                                            block: 'distance',
                                            content: {
                                                elem: 'way',
                                                content: '1240m'
                                            }
                                        },
                                        {
                                            block: 'rating',
                                            content :[
                                                {
                                                    block: 'star',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/empty_star.png',
                                                            alt: 'star'

                                                        }

                                                    ]
                                                },
                                                {
                                                    block: 'reviews',
                                                    content: '198 REVIEWS'
                                                }
                                            ]

                                        }
                                    ]
                                },
                                {
                                    block: 'title',
                                    mods: { food: 'eat'},
                                    content: [
                                        {
                                            elem: 'first',
                                            tag: 'h1',
                                            content: "The South's Best Fried Chicken"

                                        },
                                        {
                                            elem: 'second',
                                            tag: 'h2',
                                            content: 'Fried Chicken with cheese'
                                        }
                                    ]
                                },
                                {
                                    block: 'order',
                                    content: [
                                        {
                                            elem: 'price',
                                            content: '$ 15,99'
                                        },
                                        {
                                            block: 'button',
                                            type: 'submit',
                                            text: 'Order Now',
                                            mods: { food: 'eat' }
                                        }
                                    ]
                                },
                                {
                                    block: 'cafe',
                                    content: [
                                        {
                                            block: 'image',
                                            mods: { food: 'eat'},
                                            url: '/desktop.blocks/image/_food/cafe_image.jpg',
                                            alt: 'cafe'
                                        },
                                        {
                                            block: 'title',
                                            mods: { food: 'cafe'},
                                            content: [
                                                {
                                                    elem: 'first',
                                                    tag: 'h1',
                                                    content: "Chicken Restaurant"

                                                },
                                                {
                                                    elem: 'second',
                                                    tag: 'h2',
                                                    content: '68 5th Avenue New York'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'like',
                                            content: [
                                                {
                                                    block: 'image',
                                                    mods: { food: 'like'},
                                                    url: '/desktop.blocks/image/_food/like.png',
                                                    alt: 'like'

                                                },
                                                {
                                                    elem: 'sum',
                                                    content: '48'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },{
                            block: 'eat',
                            content: [
                                {
                                    block: 'slider',
                                    mods: { food : 'eat'},
                                    content: [
                                        {
                                            block: 'distance',
                                            content: {
                                                elem: 'way',
                                                content: '1240m'
                                            }
                                        },
                                        {
                                            block: 'rating',
                                            content :[
                                                {
                                                    block: 'star',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/star.png',
                                                            alt: 'star'

                                                        },
                                                        {
                                                            block: 'image',
                                                            mods: { food: 'star'},
                                                            url: '/desktop.blocks/image/_food/empty_star.png',
                                                            alt: 'star'

                                                        }

                                                    ]
                                                },
                                                {
                                                    block: 'reviews',
                                                    content: '198 REVIEWS'
                                                }
                                            ]

                                        }
                                    ]
                                },
                                {
                                    block: 'title',
                                    mods: { food: 'eat'},
                                    content: [
                                        {
                                            elem: 'first',
                                            tag: 'h1',
                                            content: "The South's Best Fried Chicken"

                                        },
                                        {
                                            elem: 'second',
                                            tag: 'h2',
                                            content: 'Fried Chicken with cheese'
                                        }
                                    ]
                                },
                                {
                                    block: 'order',
                                    content: [
                                        {
                                            elem: 'price',
                                            content: '$ 15,99'
                                        },
                                        {
                                            block: 'button',
                                            type: 'submit',
                                            text: 'Order Now',
                                            mods: { food: 'eat' }
                                        }
                                    ]
                                },
                                {
                                    block: 'cafe',
                                    content: [
                                        {
                                            block: 'image',
                                            mods: { food: 'eat'},
                                            url: '/desktop.blocks/image/_food/cafe_image.jpg',
                                            alt: 'cafe'
                                        },
                                        {
                                            block: 'title',
                                            mods: { food: 'cafe'},
                                            content: [
                                                {
                                                    elem: 'first',
                                                    tag: 'h1',
                                                    content: "Chicken Restaurant"

                                                },
                                                {
                                                    elem: 'second',
                                                    tag: 'h2',
                                                    content: '68 5th Avenue New York'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'like',
                                            content: [
                                                {
                                                    block: 'image',
                                                    mods: { food: 'like'},
                                                    url: '/desktop.blocks/image/_food/like.png',
                                                    alt: 'like'

                                                },
                                                {
                                                    elem: 'sum',
                                                    content: '48'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]

        }

    ]
};