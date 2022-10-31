var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        words: React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            selectedCheckbox: false,
            sortArrayWords:this.props.words.slice(0).sort(),
            filterArrayWords:this.props.words.slice(0),
            nowArrayWords:this.props.words.slice(0),
            text:'',
        };
    },

    vote: function() {
        this.setState({nowArrayWords:this.props.words.slice(0)});
        this.setState({selectedCheckbox: false});
        this.setState({text:''});
        console.log('сброс ');
    },

    sorting: function() {
        if (!this.state.selectedCheckbox){
            this.setState( {nowArrayWords:this.state.filterArrayWords.slice(0).sort()} );
            console.log('отсортирован ');
            this.setState({selectedCheckbox:true});
        }else {
            console.log('сортировка отменена ');
            this.setState({selectedCheckbox:false});
            this.setState({nowArrayWords:this.state.filterArrayWords});
        }

    },

    fieldTextChanged: function(EO) {
        this.setState({filterArrayWords:this.props.words.slice(0)});
        var sss = EO.target.value;
        this.setState({text:sss});
        this.setState( (prevState, props) => { return {filterArrayWords:prevState.filterArrayWords.filter(word => word.includes(sss))}; } );
        if (this.state.selectedCheckbox){
            this.setState( (prevState, props) => { return {nowArrayWords:prevState.filterArrayWords.slice(0).sort()}; } );
            console.log('отсортирован и отфильтрован ');
        }else {
            this.setState( (prevState, props) => { return {nowArrayWords:prevState.filterArrayWords}; } );
            console.log('отфильтрован ');
        }
    },

    render: function() {
        var wordsArr =this.state.nowArrayWords.map( (v, i) =>
            React.DOM.span({key:i, className:'word'}, v,'\n'),
           );

        return React.DOM.div( {className:'FilterBlock'},
           // React.createElement(VotesQuestion, {question:this.props.question} ),
           // React.DOM.div( {className:'Answers'}, answersCode ),
          //  ((this.state.workMode==1)&&this.state.selectedAnswerCode)
                //?
                React.DOM.input( {type:'checkbox',checked:this.state.selectedCheckbox, onClick:this.sorting} ),
                React.DOM.input( {type:'text',value: this.state.text, onChange:this.fieldTextChanged}),
                React.DOM.input( {type:'button',value:'сброс',onClick:this.vote} ),
                React.DOM.div({className: 'contWords'},wordsArr),
               // :null
        );

    },

});