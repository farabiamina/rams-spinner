import React, { useState } from 'react';
import './Spinner.css';
import {NextSvg, PreviousSvg} from "../icons/Icon";

const Spinner = () => {
    const [currentImage, setCurrentImage] = useState(18); // сайт начинается с 18-ой картинки
    const totalImages = 120; // общее количество картинок
    const mainImages = [18, 49, 86]; // главные картинки на которых мы "останавливаемся"
    const velocity = 28; // сколько миллисикунд отображается каждая картинка

    const getNextMainImage = (currentImage, forward) => { // функция которая отпределяет следующий индекс картинки
        const currentMainIndex = mainImages.indexOf(currentImage); // находим индекс текущей картинки если он есть в главных
        if (forward) { // если движемся вперед
            if (currentMainIndex === -1) { // если наша текущая картинка не главная
                return currentImage === totalImages - 1 ? 0 : currentImage + 1; // проверяем если это последняя картинка и приравниваем к нулю иначе просто уведичиваем на 1
            } else if (currentMainIndex === mainImages.length - 1) { // если мы на последней главной картинке
                return mainImages[0]; // то следущая картинка первая главная
            } else { // иначе мы должны перейти к следующей главной картинке
                return mainImages[currentMainIndex + 1];
            }
        } else { // если движемся назад
            if (currentMainIndex === -1) { // если не на главной странице
                return currentImage === 0 ? totalImages - 1 : currentImage - 1; // если мы на нулевой картинке то возвращаем 119-ую картинку
            } else if (currentMainIndex === 0) { // если мы на первой главной странице
                return mainImages[mainImages.length - 1]; // возваращаем последнюю главную картинку
            } else { // иначе мы просто переходим к предыдущей главной картинке
                return mainImages[currentMainIndex - 1];
            }
        }
    };

    const handleChangeImage = (forward) => { // функция которая делает переход картинок
        const nextImage = getNextMainImage(currentImage, forward); // определяем следующую картинку
        const interval = setInterval(() => { // выполняем с интервалом 28мс
            setCurrentImage(prevImage => { // меняем текущую картинку
                return prevImage === nextImage ? nextImage : (prevImage + (forward ? 1 : -1) + totalImages) % totalImages;
                // если текущая картинка равна со следующей то мы дошли до желаемой картинки и не обновляем ее, иначе увеличиваем либо уменьшаем индекс на 1
            });
        }, velocity);

        setTimeout(() => {
            clearInterval(interval);
        }, velocity * Math.abs(nextImage - currentImage));
        // отключаем интервал после того как переход закончился, то есть количество картинок между текущей и следующей главной умноженной на продолжительность каждой
    };

    return (
        <main>
            <div className="image-container">
                <img src={`../images/${currentImage}.jpg`} alt={`Image ${currentImage}`} />
            </div>
            <div className="buttons">
                <button onClick={() => handleChangeImage(false)}><PreviousSvg/></button>
                <button onClick={() => handleChangeImage(true)}><NextSvg/></button>
            </div>
        </main>
    );
};

export default Spinner;
