var React = require('react');
var PhotoDetail = require('./photoDetail');

var PhotoViewer = React.createClass({
    // getInitialState:function(){
    //     return {
    //         location: 0
    //     }
    // },
    clickLeft:function(){
        var location = this.props.currentLocation();
        if(location > 0){
            location--;
            
        }else{
            location=this.props.dataLength - 1;
        }
        this.props.changePhoto(location);
        
    },
    clickRight:function(){
        var location = this.props.currentLocation();
        location = (location + 1) % this.props.dataLength;
        this.props.changePhoto(location);
    },
    render:function(){
        var detail = {
            title:this.props.data.title,
            content:this.props.data.content
        }
        return (
            <div className="photo">
                <button className="arrowLeft" onClick={this.clickLeft}> </button>
                <img src={this.props.data.src} alt="LOADING..."></img>
                <button className="arrowRight" onClick={this.clickRight}> </button>
                <PhotoDetail value={detail} />
            </div>
        );
    }
});

module.exports = PhotoViewer;