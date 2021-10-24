import React from 'react';
import Chart from "react-apexcharts";

const ProfileChart = () => {

    const radarColors = "#1a73e8";
	const colorLabel =  "#353535";

    const options = {
        chart : {
            animations : {
                enabled : true,
                easing  : "easeinout",
                speed   : "800",
            },
            toolbar : {
                show : false,
            },
            fontFamily : "Montserrat, Helvetica, Arial, serif",
            offsetY    : 0,
            height     : "auto",
        },
        fill : {
            opacity : ".95",
        },
        legend : {
            show : false,
        },
        yaxis : {
            show : false,
        },
        colors : [radarColors],
        xaxis  : {
            type       : "category",
            categories : ["Emparejamiento de cartas", "Recuerda los números" , "Recuerda la secuencia de las figuras", "Recuerda las palabras", "Completa la frase"],
            floating   : true,
    
            labels : {
                show : false,
    
                style : {
                    colors   : [colorLabel, colorLabel, colorLabel, colorLabel, colorLabel],
                    fontSize : "12px",
                },
            },
        },
        plotOptions: {
            radar: {
              size: 90,
              polygons: {
                strokeColors: '#A8B2C1',
                strokeWidth: 1,
                connectorColors: '#A8B2C1',

              }
            }
          },
        markers : {
            size : 2,
            colors: ['#2460AD'],
            strokeColor: '#2460AD',
            strokeWidth: 2,
        },
        tooltip : {
            enabled      : true,
            followCursor : true,
        },
        grid : {
            show    : false,
            padding : {
                top    : -20,
                bottom : -20,
            },
        },
    };

    const series = [
		{
			name : "Origen",
			data : [
				0,
                2,
                5,
                3,
                4,
            ],
		},
	];
    return (
        <Chart options={options} series={series} type="radar" />
    );
}

export default ProfileChart
