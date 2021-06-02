<template>
  <div id="categories">
    <h1> 分类 </h1>
    <div class="wrapper">
      <ul class="content">
        <li>Better-Scroll数据测试1</li>
        <li>Better-Scroll数据测试2</li>
        <li>Better-Scroll数据测试3</li>
        <li>Better-Scroll数据测试4</li>
        <li>Better-Scroll数据测试5</li>
        <li>Better-Scroll数据测试6</li>
        <li>Better-Scroll数据测试7</li>
        <li>Better-Scroll数据测试8</li>
        <li>Better-Scroll数据测试9</li>
        <li>Better-Scroll数据测试10</li>
        <li>Better-Scroll数据测试11</li>
        <li>Better-Scroll数据测试12</li>
        <li>Better-Scroll数据测试13</li>
        <li>Better-Scroll数据测试14</li>
        <li>Better-Scroll数据测试15</li>
        <li>Better-Scroll数据测试16</li>
        <li>Better-Scroll数据测试17</li>
        <li>Better-Scroll数据测试18</li>
        <li>Better-Scroll数据测试19</li>
        <li>Better-Scroll数据测试20</li>
        <li>Better-Scroll数据测试21</li>
        <li>Better-Scroll数据测试22</li>
        <li>Better-Scroll数据测试23</li>
        <li>Better-Scroll数据测试24</li>
        <li>Better-Scroll数据测试25</li>
        <li>Better-Scroll数据测试26</li>
        <li>Better-Scroll数据测试27</li>
        <li>Better-Scroll数据测试28</li>
        <li>Better-Scroll数据测试29</li>
        <li>Better-Scroll数据测试30</li>
        <li>Better-Scroll数据测试31</li>
        <li>Better-Scroll数据测试32</li>
        <li>Better-Scroll数据测试33</li>
        <li>Better-Scroll数据测试34</li>
        <li>Better-Scroll数据测试35</li>
        <li>Better-Scroll数据测试36</li>
        <li>Better-Scroll数据测试37</li>
        <li>Better-Scroll数据测试38</li>
        <li>Better-Scroll数据测试39</li>
        <li>Better-Scroll数据测试40</li>
        <li>Better-Scroll数据测试41</li>
        <li>Better-Scroll数据测试42</li>
        <li>Better-Scroll数据测试43</li>
        <li>Better-Scroll数据测试44</li>
        <li>Better-Scroll数据测试45</li>
        <li>Better-Scroll数据测试46</li>
        <li>Better-Scroll数据测试47</li>
        <li>Better-Scroll数据测试48</li>
        <li>Better-Scroll数据测试49</li>
        <li>Better-Scroll数据测试50</li>
        <li>Better-Scroll数据测试51</li>
        <li>Better-Scroll数据测试52</li>
        <li>Better-Scroll数据测试53</li>
        <li>Better-Scroll数据测试54</li>
        <li>Better-Scroll数据测试55</li>
        <li>Better-Scroll数据测试56</li>
        <li>Better-Scroll数据测试57</li>
        <li>Better-Scroll数据测试58</li>
        <li>Better-Scroll数据测试59</li>
        <li>Better-Scroll数据测试60</li>
        <li>Better-Scroll数据测试61</li>
        <li>Better-Scroll数据测试62</li>
        <li>Better-Scroll数据测试63</li>
        <li>Better-Scroll数据测试64</li>
        <li>Better-Scroll数据测试65</li>
        <li>Better-Scroll数据测试66</li>
        <li>Better-Scroll数据测试67</li>
        <li>Better-Scroll数据测试68</li>
        <li>Better-Scroll数据测试69</li>
        <li>Better-Scroll数据测试70</li>
        <li>Better-Scroll数据测试71</li>
        <li>Better-Scroll数据测试72</li>
        <li>Better-Scroll数据测试73</li>
        <li>Better-Scroll数据测试74</li>
        <li>Better-Scroll数据测试75</li>
        <li>Better-Scroll数据测试76</li>
        <li>Better-Scroll数据测试77</li>
        <li>Better-Scroll数据测试78</li>
        <li>Better-Scroll数据测试79</li>
        <li>Better-Scroll数据测试80</li>
        <li>Better-Scroll数据测试81</li>
        <li>Better-Scroll数据测试82</li>
        <li>Better-Scroll数据测试83</li>
        <li>Better-Scroll数据测试84</li>
        <li>Better-Scroll数据测试85</li>
        <li>Better-Scroll数据测试86</li>
        <li>Better-Scroll数据测试87</li>
        <li>Better-Scroll数据测试88</li>
        <li>Better-Scroll数据测试89</li>
        <li>Better-Scroll数据测试90</li>
        <li>Better-Scroll数据测试91</li>
        <li>Better-Scroll数据测试92</li>
        <li>Better-Scroll数据测试93</li>
        <li>Better-Scroll数据测试94</li>
        <li>Better-Scroll数据测试95</li>
        <li>Better-Scroll数据测试96</li>
        <li>Better-Scroll数据测试97</li>
        <li>Better-Scroll数据测试98</li>
        <li>Better-Scroll数据测试99</li>
        <li>Better-Scroll数据测试100</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 200px;
  background-color: pink;

  overflow: hidden;
  /* overflow-y: scroll; Y 轴区域滚动 */
}
</style>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null
    }
  },
  // 实现生命周期函数
  created() {

  },
  mounted() {
    this.scroll = new BScroll('.wrapper', {

    })
    console.log(document.querySelector('.wrapper'));
  }


}
</script>