// D頁面 - 考官資訊頁面的JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 添加載入動畫
    document.body.style.opacity = '1';
    
    // 返回按鈕點擊效果
    const returnBtn = document.querySelector('.return-btn');
    if (returnBtn) {
        returnBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            // 新增返回連結
            window.location.href = 'https://ooleo76.github.io/PGY_EPA_dyspnea_2/';

            // 這裡可以添加實際的返回邏輯
            console.log('返回按鈕被點擊');
        });
    }

    // 為資訊區塊添加進入動畫
    const infoSections = document.querySelectorAll('.info-section');
    infoSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + index * 250);
    });

    // 為生命徵象添加動畫效果
    const vitalItems = document.querySelectorAll('.vital-item');
    vitalItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 1000 + index * 150);
    });

    // 為檢查子項目添加動畫效果
    const examSubsections = document.querySelectorAll('.exam-subsection');
    examSubsections.forEach((subsection, index) => {
        subsection.style.opacity = '0';
        subsection.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            subsection.style.transition = 'all 0.5s ease';
            subsection.style.opacity = '1';
            subsection.style.transform = 'translateX(0)';
        }, 800 + index * 200);
    });

    // 為生命徵象添加點擊效果和異常值標示
    vitalItems.forEach(item => {
        item.addEventListener('click', function() {
            // 添加脈衝動畫效果
            this.style.transform = 'scale(1.05)';
            this.style.background = 'linear-gradient(135deg, #ffe6e6, #ffcccc)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'white';
            }, 300);
            
            // 高亮顯示異常值
            const vitalValue = this.querySelector('.vital-value');
            const vitalLabel = this.querySelector('.vital-label');
            
            // 檢查是否為異常值並給予不同顏色
            const labelText = vitalLabel.textContent;
            if (labelText === 'BP') {
                vitalValue.style.color = '#e74c3c'; // 高血壓 - 紅色
            } else if (labelText === 'SpO2') {
                vitalValue.style.color = '#e74c3c'; // 低血氧 - 紅色
            } else {
                vitalValue.style.color = '#f39c12'; // 其他異常 - 橘色
            }
            
            vitalValue.style.fontSize = '1.5rem';
            
            setTimeout(() => {
                vitalValue.style.fontSize = '1.4rem';
            }, 1000);
        });
    });

    // 為檢查項目添加點擊高亮效果
    const examDetails = document.querySelectorAll('.exam-detail');
    examDetails.forEach(detail => {
        detail.addEventListener('click', function() {
            // 移除其他項目的高亮
            examDetails.forEach(d => d.classList.remove('highlighted'));
            
            // 高亮當前項目
            this.classList.add('highlighted');
            
            setTimeout(() => {
                this.classList.remove('highlighted');
            }, 2000);
        });
    });

    // 為列表項目添加懸停效果
    const listItems = document.querySelectorAll('.exam-detail li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#3498db';
            this.style.paddingLeft = '5px';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#2c3e50';
            this.style.paddingLeft = '0';
        });
    });

    // 添加鍵盤快捷鍵支持
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case '1':
                // 快捷鍵1 - 聚焦到基本資料
                infoSections[0].scrollIntoView({behavior: 'smooth'});
                break;
            case '2':
                // 快捷鍵2 - 聚焦到現病史
                infoSections[1].scrollIntoView({behavior: 'smooth'});
                break;
            case '3':
                // 快捷鍵3 - 聚焦到理學檢查
                infoSections[2].scrollIntoView({behavior: 'smooth'});
                break;
            case 'v':
                // 快捷鍵v - 聚焦到生命徵象
                document.querySelector('.vital-signs').scrollIntoView({behavior: 'smooth'});
                break;
            case 'Escape':
                // ESC鍵 - 返回
                returnBtn.click();
                break;
            case 'Home':
                // Home鍵 - 滾動到頂部
                window.scrollTo({top: 0, behavior: 'smooth'});
                break;
            case 'End':
                // End鍵 - 滾動到底部
                window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
                break;
        }
    });

    // 響應式處理
    function handleResize() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.margin = '10px';
            container.style.borderRadius = '10px';
        } else {
            container.style.margin = '0 auto';
            container.style.borderRadius = '15px';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始執行

    // 添加滾動效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        
        if (scrollTop > lastScrollTop) {
            // 向下滾動
            header.style.transform = 'translateY(-5px)';
        } else {
            // 向上滾動
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // 自動標示重要異常值
    function highlightAbnormalValues() {
        const vitalValues = document.querySelectorAll('.vital-value');
        vitalValues.forEach(value => {
            const text = value.textContent;
            // 標示明顯異常的數值
            if (text.includes('210/70') || text.includes('87%')) {
                value.style.background = 'rgba(231, 76, 60, 0.1)';
                value.style.padding = '2px 6px';
                value.style.borderRadius = '4px';
                value.style.animation = 'pulse 2s infinite';
            }
        });
    }

    // 延遲執行異常值標示
    setTimeout(highlightAbnormalValues, 2000);

    console.log('急性呼吸困難評估 - 考官資訊頁面已載入');
});

// 添加高亮和動畫樣式
const style = document.createElement('style');
style.textContent = `
    .exam-detail.highlighted {
        background-color: rgba(52, 152, 219, 0.1) !important;
        border-left: 4px solid #3498db;
        padding-left: 16px;
        transform: scale(1.02);
        transition: all 0.3s ease;
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
        70% { box-shadow: 0 0 0 8px rgba(231, 76, 60, 0); }
        100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
    }
`;
document.head.appendChild(style);