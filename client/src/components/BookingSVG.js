// import { urlencoded } from "body-parser";
import leftDesk from "../images/left_desk.svg";
import rightDesk from "../images/right_desk.svg";
import "../stylings/SVG.css";

function BookingSVG(){

   function handleSVGClick(event){
      console.log(event.target.innerText);
   }
    return (
       <div className="floor-plan" >
          <div className="desks-1-to-8 desk-space" >
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left inactive"><span>5</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>4</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>6</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>3</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>7</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>2</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>8</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>1</span></div>
         </div>
         <div className="desks-9-to-16 desk-space" >
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>13</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>12</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>14</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>11</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>15</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>10</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>16</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>9</span></div>
         </div>
         <div className="desks-17-to-22 desk-space" >
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>20</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>19</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>21</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>18</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>22</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>17</span></div>
         </div>
         <div className="desks-23-to-30 desk-space" role="tablist" >
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>27</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>26</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>28</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>25</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>29</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>24</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>30</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>23</span></div>
         </div>
         <div className="desks-41-to-50 desk-space">
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-9} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>46</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-8} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>45</span></div>
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>47</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>44</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>48</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>43</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>49</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>42</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>50</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>41</span></div>
         </div>
         <div className="desks-31-to-40 desk-space">
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-9} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>36</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-8} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>35</span></div>
            <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>37</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>34</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>38</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>33</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>39</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>32</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>40</span></div>
            <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>31</span></div>
         </div>
       </div>
    );
}

export default BookingSVG;