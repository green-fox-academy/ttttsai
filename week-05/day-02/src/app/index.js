var React = require('react');
var ReactDOM = require('react-dom');

var PhotoViewer = require('./photoViewer');
var Thumbnails = require('./thumbnails');
var SearchBar = require('./searchBar');

var GalleryData = require('./data.js');

require('./css/style.css');
//require('./css/addItem.css');

var Gallery = React.createClass({
    getInitialState:function(){
        return {
            CURRENTPHOTO: 0
        }
    },
    onClickThumbBtn(location){
        this.setState({
            CURRENTPHOTO: location
        });
    },
    returnCurrentLocation(){
        return this.state.CURRENTPHOTO;
    },
    searchPhotoName(str){
        for(var i = 0; i < GalleryData.length; i++){
            if(GalleryData[i].name === str){
                this.onClickThumbBtn(i);
                break;
            }
        }
    },
    render: function(){
        return (
            <div className = "center" >
                <SearchBar searchPhotoName={this.searchPhotoName} />
                <PhotoViewer data={GalleryData[this.state.CURRENTPHOTO]} currentLocation={this.returnCurrentLocation} dataLength={GalleryData.length} changePhoto={this.onClickThumbBtn}/>
                <Thumbnails data={GalleryData} dataLength={GalleryData.length} changePhoto={this.onClickThumbBtn} />
            </div>
        );
    }
});

ReactDOM.render(<Gallery />, document.querySelector("body"));

//console.log(GalleryData);