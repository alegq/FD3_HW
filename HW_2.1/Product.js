var Product = React.createClass({

  displayName: 'Product',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    cbSelected: React.PropTypes.func.isRequired,
    cbDeletProduct: React.PropTypes.func.isRequired,
    selectedProductCode: React.PropTypes.number, // может быть null, пока ни один продукт не выбран
  },

  productClicked:function(EO){
      this.props.cbSelected(this.props.code);
  },

  deleteProduct: function(EO){
    this.props.cbDeletProduct(this.props.code);
    EO.stopPropagation()
  },

  render: function() {

    // return React.DOM.div( {className:'Product'},
    //     //   React.DOM.div({className:'Text'},this.props.text),
    //     //   React.DOM.img({className:'Imgg', src: this.props.url}),
    //     //   React.DOM.div({className:'Price'},this.props.price,'$'),
    //     //   React.DOM.div({className:'Count'},'наличие:'+this.props.count),
    //     //   React.DOM.input( {type:'button',value:'Delete',onClick:this.vote} ),
    //     // );

    return React.DOM.tr({className:'Product', onClick:this.productClicked,
                style:{backgroundColor:(this.props.selectedProductCode===this.props.code)?'red':'white'}},
              React.DOM.td({className:'tdProduct'},
                  React.DOM.span({className:'Text'},this.props.text)),

              React.DOM.td({className:'tdProduct'},
                  React.DOM.img({className:'Imgg', src: this.props.url})),

              React.DOM.td({className:'tdProduct'},
                  React.DOM.span({className:'Price'},this.props.price,'$')),

              React.DOM.td({className:'tdProduct'},
                  React.DOM.span({className:'Count'},this.props.count)),

              React.DOM.td({className:'tdProduct'},
                  React.DOM.input( {type:'button',value:'Delete',onClick:this.deleteProduct} )),
           );

  },

});